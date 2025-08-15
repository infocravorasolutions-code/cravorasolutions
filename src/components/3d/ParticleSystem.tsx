import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { usePerformanceMode } from '../../hooks/usePerformanceMode';

interface ParticleSystemProps {
  count?: number;
  radius?: number;
  speed?: number;
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({
  count = 1000,
  radius = 15,
  speed = 0.5
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  const { isLiteMode } = usePerformanceMode();
  
  const particleCount = isLiteMode ? Math.min(count / 2, 200) : count;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Spherical distribution
      const radius3d = radius * (0.2 + Math.random() * 0.8);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius3d * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius3d * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius3d * Math.cos(phi);
      
      // Gradient colors from teal to blue
      const t = Math.random();
      const color = new THREE.Color().lerpColors(
        new THREE.Color('#11C5A3'),
        new THREE.Color('#0AA0FF'),
        t
      );
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, [particleCount, radius]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += speed * 0.001;
      pointsRef.current.rotation.x += speed * 0.0005;
      
      // Subtle breathing effect
      const breathe = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      pointsRef.current.scale.setScalar(breathe);
    }
  });

  if (isLiteMode && particleCount < 100) return null;

  return (
    <Points ref={pointsRef} positions={positions} colors={colors}>
      <PointMaterial
        size={isLiteMode ? 0.01 : 0.02}
        transparent
        opacity={0.8}
        sizeAttenuation
        vertexColors
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </Points>
  );
};