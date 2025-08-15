import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { 
  PerspectiveCamera, 
  Environment, 
  Float,
  Text3D,
  Center,
  MeshTransmissionMaterial
} from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';
import { usePerformanceMode } from '../../hooks/usePerformanceMode';

const CravoraLogo: React.FC<{ morphProgress: number }> = ({ morphProgress }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create the C ring geometry
  const ringGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const outerRadius = 2;
    const innerRadius = 1.4;
    const openingAngle = Math.PI / 3;
    
    // Outer arc
    shape.absarc(0, 0, outerRadius, -Math.PI + openingAngle/2, Math.PI - openingAngle/2, false);
    
    // Inner arc (reverse direction)
    const hole = new THREE.Path();
    hole.absarc(0, 0, innerRadius, Math.PI - openingAngle/2, -Math.PI + openingAngle/2, true);
    shape.holes.push(hole);
    
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.05,
      bevelSegments: 8,
    });
  }, []);

  // Create checkmark geometry
  const checkGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    // Simple checkmark path
    shape.moveTo(-0.5, 0);
    shape.lineTo(-0.1, -0.4);
    shape.lineTo(0.6, 0.3);
    shape.lineTo(0.4, 0.5);
    shape.lineTo(-0.1, 0);
    shape.lineTo(-0.7, 0.2);
    shape.closePath();
    
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.2,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.02,
      bevelSegments: 4,
    });
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <Center>
        <mesh ref={meshRef} geometry={ringGeometry} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#11C5A3"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1.5}
          />
        </mesh>
        
        {/* Checkmark that appears with morph progress */}
        <mesh 
          geometry={checkGeometry} 
          position={[0, 0, 0.2]}
          scale={morphProgress}
        >
          <meshStandardMaterial
            color="#0AA0FF"
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1.2}
          />
        </mesh>
      </Center>
    </Float>
  );
};

const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const { isLiteMode } = usePerformanceMode();
  
  const particleCount = isLiteMode ? 100 : 500;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [particleCount]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x += 0.0005;
    }
  });

  if (isLiteMode) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#11C5A3"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

interface HeroSceneProps {
  morphProgress?: number;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ morphProgress = 0 }) => {
  const { isLiteMode } = usePerformanceMode();
  
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas dpr={isLiteMode ? 1 : [1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        {/* Environment for reflections */}
        {!isLiteMode && (
          <Environment preset="city" environmentIntensity={0.6} />
        )}
        
        {/* Main logo */}
        <CravoraLogo morphProgress={morphProgress} />
        
        {/* Particle field */}
        <ParticleField />
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#F7FAFC', 15, 30]} />
      </Canvas>
    </div>
  );
};