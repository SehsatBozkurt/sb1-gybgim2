import React from 'react';
import { Box } from '@react-three/drei';

export function KaabaDoor() {
  return (
    <>
      {/* Main Door Frame */}
      <Box args={[0.1, 10, 6]} position={[7.52, -1, 0]} castShadow>
        <meshStandardMaterial
          color="#C5A572"
          metalness={1}
          roughness={0.1}
          emissive="#C5A572"
          emissiveIntensity={0.3}
        />
      </Box>

      {/* Door Panels */}
      <Box args={[0.2, 9.5, 5.5]} position={[7.51, -1, 0]} castShadow>
        <meshStandardMaterial
          color="#C5A572"
          metalness={1}
          roughness={0.1}
          emissive="#C5A572"
          emissiveIntensity={0.4}
        />
      </Box>

      {/* Decorative Border Elements - Top */}
      <Box args={[0.15, 0.5, 5.8]} position={[7.53, 3.8, 0]} castShadow>
        <meshStandardMaterial
          color="#C5A572"
          metalness={1}
          roughness={0.1}
          emissive="#C5A572"
          emissiveIntensity={0.5}
        />
      </Box>

      {/* Decorative Border Elements - Bottom */}
      <Box args={[0.15, 0.5, 5.8]} position={[7.53, -5.8, 0]} castShadow>
        <meshStandardMaterial
          color="#C5A572"
          metalness={1}
          roughness={0.1}
          emissive="#C5A572"
          emissiveIntensity={0.5}
        />
      </Box>

      {/* Vertical Decorative Strips */}
      {[-2.5, 0, 2.5].map((z, i) => (
        <Box 
          key={i}
          args={[0.15, 9, 0.3]} 
          position={[7.53, -1, z]} 
          castShadow
        >
          <meshStandardMaterial
            color="#C5A572"
            metalness={1}
            roughness={0.1}
            emissive="#C5A572"
            emissiveIntensity={0.5}
          />
        </Box>
      ))}

      {/* Horizontal Decorative Strips */}
      {[-3, 0, 3].map((y, i) => (
        <Box 
          key={i}
          args={[0.15, 0.3, 5.5]} 
          position={[7.53, y - 1, 0]} 
          castShadow
        >
          <meshStandardMaterial
            color="#C5A572"
            metalness={1}
            roughness={0.1}
            emissive="#C5A572"
            emissiveIntensity={0.5}
          />
        </Box>
      ))}

      {/* Door Handles */}
      {[-1, 1].map((z, i) => (
        <Box 
          key={i}
          args={[0.3, 0.8, 0.8]} 
          position={[7.6, 0, z * 1.5]} 
          castShadow
        >
          <meshStandardMaterial
            color="#C5A572"
            metalness={1}
            roughness={0.1}
            emissive="#C5A572"
            emissiveIntensity={0.6}
          />
        </Box>
      ))}

      {/* Calligraphic Panel */}
      <Box args={[0.15, 1.5, 4]} position={[7.53, 2, 0]} castShadow>
        <meshStandardMaterial
          color="#C5A572"
          metalness={1}
          roughness={0.1}
          emissive="#C5A572"
          emissiveIntensity={0.5}
        />
      </Box>
    </>
  );
}