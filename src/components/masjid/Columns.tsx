import React from 'react';
import { Cylinder, Box } from '@react-three/drei';

export function Columns() {
  const generateColumnPositions = () => {
    const positions = [];
    const radius = 50; // Reduced radius to match smaller Tawaf area
    const count = 16; // Reduced number of columns
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      positions.push([x, 0, z]);
    }
    
    return positions;
  };

  const renderColumn = (position: number[], index: number) => (
    <group key={index} position={[position[0], 7, position[2]]}>
      {/* Column base */}
      <Box args={[3, 1, 3]} position={[0, -14, 0]}>
        <meshStandardMaterial 
          color="#ffffff"
          metalness={0.1}
          roughness={0.8}
          emissive="#ffffff"
          emissiveIntensity={0.05}
        />
      </Box>
      
      {/* Main column shaft */}
      <Cylinder args={[1.2, 1.5, 30, 8]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial 
          color="#ffffff"
          metalness={0.1}
          roughness={0.6}
          emissive="#ffffff"
          emissiveIntensity={0.05}
        />
      </Cylinder>
      
      {/* Column capital */}
      <Box args={[2.5, 1, 2.5]} position={[0, 15.5, 0]}>
        <meshStandardMaterial 
          color="#ffffff"
          metalness={0.1}
          roughness={0.8}
          emissive="#ffffff"
          emissiveIntensity={0.05}
        />
      </Box>
      
      {/* Decorative elements */}
      <Cylinder args={[1.3, 1.3, 0.5, 8]} position={[0, 14.5, 0]}>
        <meshStandardMaterial 
          color="#ffffff"
          metalness={0.2}
          roughness={0.7}
          emissive="#ffffff"
          emissiveIntensity={0.05}
        />
      </Cylinder>
    </group>
  );

  return (
    <>
      {generateColumnPositions().map((position, index) => renderColumn(position, index))}
    </>
  );
}