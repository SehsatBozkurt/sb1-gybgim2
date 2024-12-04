import React from 'react';
import { Cylinder, Cone, Box } from '@react-three/drei';

export function Minarets() {
  const minaretPositions = [
    [-80, 0, -80],
    [80, 0, -80],
    [-80, 0, 80],
    [80, 0, 80],
  ];

  const renderMinaret = (position: number[], index: number) => (
    <group key={index} position={position}>
      {/* Base */}
      <Box args={[6, 4, 6]} position={[0, -6, 0]}>
        <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.8} />
      </Box>
      
      {/* Main shaft */}
      <Cylinder args={[2, 3, 50, 8]} position={[0, 17, 0]} castShadow>
        <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.6} />
      </Cylinder>
      
      {/* Decorative rings */}
      {[10, 20, 30].map((height, i) => (
        <Cylinder key={i} args={[2.2, 2.2, 1, 8]} position={[0, height, 0]}>
          <meshStandardMaterial color="#f5f5f5" metalness={0.2} roughness={0.7} />
        </Cylinder>
      ))}
      
      {/* Top section */}
      <Cylinder args={[2.2, 2, 8, 8]} position={[0, 42, 0]}>
        <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.6} />
      </Cylinder>
      
      {/* Spire */}
      <Cone args={[1.5, 8, 8]} position={[0, 46, 0]} castShadow>
        <meshStandardMaterial color="#C5A572" metalness={0.8} roughness={0.2} />
      </Cone>
    </group>
  );

  return (
    <>
      {minaretPositions.map((position, index) => renderMinaret(position, index))}
    </>
  );
}