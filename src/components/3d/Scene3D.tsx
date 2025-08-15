import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  PerspectiveCamera, 
  Environment, 
  Float,
  Center,
  useProgress,
  Html,
  AdaptiveDpr,
  AdaptiveEvents,
  BakeShadows,
  SoftShadows
} from '@react-three/drei';
import { EffectComposer, Bloom, SSAO, DepthOfField } from '@react-three/postprocessing';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';
import { usePerformanceMode } from '../../hooks/usePerformanceMode';

// Loading fallback component
const Loader: React.FC = () => {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
        <div className="w-16 h-16 border-4 border-[#11C5A3]/30 border-t-[#11C5A3] rounded-full animate-spin mb-4" />
        <div className="text-sm font-medium text-gray-600">
          Loading 3D Scene... {Math.round(progress)}%
        </div>
      </div>
    </Html>
  );
};

// Enhanced Scene wrapper with performance optimizations
interface Scene3DProps {
  children: React.ReactNode;
  className?: string;
  enablePostprocessing?: boolean;
  camera?: {
    position?: [number, number, number];
    fov?: number;
  };
}

export const Scene3D: React.FC<Scene3DProps> = ({ 
  children, 
  className = "absolute inset-0",
  enablePostprocessing = true,
  camera = { position: [0, 0, 8], fov: 50 }
}) => {
  const { isLiteMode } = usePerformanceMode();
  
  return (
    <div className={className}>
      <Canvas
        dpr={isLiteMode ? 1 : [1, 2]}
        performance={{ min: 0.5 }}
        frameloop="demand"
        gl={{
          powerPreference: 'high-performance',
          antialias: !isLiteMode,
          alpha: true,
          stencil: false,
          depth: true
        }}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        
        <PerspectiveCamera 
          makeDefault 
          position={camera.position} 
          fov={camera.fov} 
        />
        
        {/* Optimized lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          castShadow={!isLiteMode}
          shadow-mapSize-width={isLiteMode ? 512 : 2048}
          shadow-mapSize-height={isLiteMode ? 512 : 2048}
        />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        {/* Conditional environment and shadows */}
        {!isLiteMode && (
          <>
            <Environment preset="city" environmentIntensity={0.6} />
            <SoftShadows />
          </>
        )}
        
        <Suspense fallback={<Loader />}>
          <group>
            {children}
          </group>
        </Suspense>
        
        {/* Conditional post-processing */}
        {enablePostprocessing && !isLiteMode && (
          <EffectComposer>
            <Bloom intensity={0.2} luminanceThreshold={0.9} />
            <SSAO intensity={0.1} radius={0.1} />
            <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} />
          </EffectComposer>
        )}
        
        <fog attach="fog" args={['#F7FAFC', 15, 30]} />
      </Canvas>
    </div>
  );
};