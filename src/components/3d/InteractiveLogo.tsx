import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { 
  Float,
  Center,
  MeshTransmissionMaterial,
  useTexture
} from '@react-three/drei';
// @ts-ignore: three types
import * as THREE from "three";

interface InteractiveLogoProps {
  morphProgress: number;
  mousePosition: { x: number; y: number };
  scale?: number;
}

export const InteractiveLogo: React.FC<InteractiveLogoProps> = ({ 
  morphProgress, 
  mousePosition,
  scale = 1
}) => {
  const logoRef = useRef<THREE.Group>(null);
  const checkRef = useRef<THREE.Mesh>(null);
  
  // Create the C ring geometry with proper UV mapping
  const ringGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const outerRadius = 2 * scale;
    const innerRadius = 1.4 * scale;
    const openingAngle = Math.PI / 3;
    
    // Create the C shape
    shape.absarc(0, 0, outerRadius, -Math.PI + openingAngle/2, Math.PI - openingAngle/2, false);
    
    // Create the inner hole
    const hole = new THREE.Path();
    hole.absarc(0, 0, innerRadius, Math.PI - openingAngle/2, -Math.PI + openingAngle/2, true);
    shape.holes.push(hole);
    
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.3 * scale,
      bevelEnabled: true,
      bevelThickness: 0.1 * scale,
      bevelSize: 0.05 * scale,
      bevelSegments: 8,
    });
    
    geometry.computeBoundingBox();
    geometry.computeVertexNormals();
    
    return geometry;
  }, [scale]);

  // Create checkmark geometry
  const checkGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const s = scale * 0.5;
    
    // Enhanced checkmark path
    shape.moveTo(-s, 0);
    shape.lineTo(-s * 0.2, -s * 0.8);
    shape.lineTo(s * 1.2, s * 0.6);
    shape.lineTo(s * 0.8, s);
    shape.lineTo(-s * 0.2, -s * 0.2);
    shape.lineTo(-s * 1.4, s * 0.4);
    shape.closePath();
    
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.2 * scale,
      bevelEnabled: true,
      bevelThickness: 0.05 * scale,
      bevelSize: 0.02 * scale,
      bevelSegments: 4,
    });
    
    geometry.computeBoundingBox();
    geometry.computeVertexNormals();
    
    return geometry;
  }, [scale]);

  // Mouse interaction and rotation
  useFrame((state) => {
    if (logoRef.current) {
      // Gentle auto-rotation
      logoRef.current.rotation.y += 0.003;
      
      // Mouse influence
      const mouseInfluence = 0.1;
      logoRef.current.rotation.x = THREE.MathUtils.lerp(
        logoRef.current.rotation.x,
        mousePosition.y * mouseInfluence,
        0.1
      );
      logoRef.current.rotation.z = THREE.MathUtils.lerp(
        logoRef.current.rotation.z,
        mousePosition.x * mouseInfluence * 0.5,
        0.1
      );
      
      // Floating animation
      logoRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.8) * 0.01;
    }
    
    if (checkRef.current) {
      checkRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
      <Center>
        <group ref={logoRef} scale={scale}>
          {/* Main C ring */}
          <mesh 
            geometry={ringGeometry} 
            position={[0, 0, 0]}
            animate={{ 
              scale: [0.9, 1, 0.9],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <meshStandardMaterial
              color="#11C5A3"
              metalness={0.9}
              roughness={0.1}
              envMapIntensity={1.5}
              emissive="#11C5A3"
              emissiveIntensity={0.1}
            />
          </mesh>
          
          {/* Animated checkmark */}
          <mesh 
            ref={checkRef}
            geometry={checkGeometry} 
            position={[0, 0, 0.2 * scale]}
            animate={{
              scale: morphProgress,
              rotateY: morphProgress * Math.PI * 2,
            }}
            transition={{ 
              duration: 1.5,
              ease: "backOut"
            }}
          >
            <meshStandardMaterial
              color="#0AA0FF"
              metalness={0.8}
              roughness={0.2}
              envMapIntensity={1.2}
              emissive="#0AA0FF"
              emissiveIntensity={0.15}
            />
          </mesh>
          
          {/* Subtle glow ring */}
          <mesh position={[0, 0, -0.1 * scale]}>
            <ringGeometry args={[2.2 * scale, 2.4 * scale, 32]} />
            <meshBasicMaterial
              color="#11C5A3"
              transparent
              opacity={0.3}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      </Center>
    </Float>
  );
};