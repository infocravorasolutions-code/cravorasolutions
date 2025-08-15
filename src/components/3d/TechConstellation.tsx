import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Line } from '@react-three/drei';
// @ts-ignore: three types
import * as THREE from "three";
import { usePerformanceMode } from '../../hooks/usePerformanceMode';

const technologies = [
  { name: 'React', category: 'Frontend', color: '#61DAFB', position: [-4, 3, 0] },
  { name: 'Node.js', category: 'Backend', color: '#339933', position: [4, 2, -2] },
  { name: 'Python', category: 'Backend', color: '#3776AB', position: [-3, 0, 2] },
  { name: 'TypeScript', category: 'Language', color: '#3178C6', position: [3, 0, -1] },
  { name: 'AWS', category: 'Cloud', color: '#FF9900', position: [-2, -2, 0] },
  { name: 'Docker', category: 'DevOps', color: '#2496ED', position: [2, -1, 1] },
  { name: 'Three.js', category: '3D', color: '#000000', position: [0, 1, 2] },
  { name: 'GraphQL', category: 'API', color: '#E10098', position: [-1, -1, -2] }
];

interface TechNodeProps {
  tech: typeof technologies[0];
  mousePosition: { x: number; y: number };
}

const TechNode: React.FC<TechNodeProps> = ({ tech, mousePosition }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Orbit around position with mouse influence
      const time = state.clock.elapsedTime;
      const mouseInfluence = 0.5;
      
      meshRef.current.position.x = tech.position[0] + Math.sin(time * 0.5) * 0.5 + mousePosition.x * mouseInfluence;
      meshRef.current.position.y = tech.position[1] + Math.cos(time * 0.3) * 0.3 + mousePosition.y * mouseInfluence;
      
      // Gentle rotation
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <Float speed={1 + Math.random()} rotationIntensity={0.3} floatIntensity={0.4}>
      <group position={tech.position}>
        <mesh 
          ref={meshRef}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2 }}
        >
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial
            color={tech.color}
            metalness={0.8}
            roughness={0.2}
            emissive={tech.color}
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* <Text
          ref={textRef}
          position={[0, -0.8, 0]}
          fontSize={0.2}
          color="#0F2333"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-medium.woff2"
        >
          {tech.name}
        </Text>
         */}
        {/* <Text
          position={[0, -1.1, 0]}
          fontSize={0.12}
          color="#6B7280"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-regular.woff2"
        >
          {tech.category}
        </Text> */}
      </group>
    </Float>
  );
};

interface TechConstellationProps {
  mousePosition: { x: number; y: number };
}

export const TechConstellation: React.FC<TechConstellationProps> = ({ mousePosition }) => {
  const { isLiteMode } = usePerformanceMode();
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate connection lines between nearby technologies
  const connections = useMemo(() => {
    const lines: Array<[THREE.Vector3, THREE.Vector3]> = [];
    
    if (isLiteMode) return lines;
    
    for (let i = 0; i < technologies.length; i++) {
      for (let j = i + 1; j < technologies.length; j++) {
        const pos1 = new THREE.Vector3(...technologies[i].position);
        const pos2 = new THREE.Vector3(...technologies[j].position);
        
        if (pos1.distanceTo(pos2) < 4) {
          lines.push([pos1, pos2]);
        }
      }
    }
    
    return lines;
  }, [isLiteMode]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Technology nodes */}
      {technologies.map((tech, index) => (
        <TechNode 
          key={tech.name} 
          tech={tech} 
          mousePosition={mousePosition}
        />
      ))}
      
      {/* Connection lines */}
      {!isLiteMode && connections.map((connection, index) => (
        <Line
          key={index}
          points={connection}
          color="#11C5A3"
          opacity={0.2}
          transparent
          lineWidth={1}
        />
      ))}
    </group>
  );
};