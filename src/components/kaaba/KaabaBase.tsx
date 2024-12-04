import React from 'react';
import { Box, Circle } from '@react-three/drei';

export function KaabaBase() {
  return (
    <>
      {/* Main marble base with realistic material */}
      <Box args={[20, 1, 20]} position={[0, -8, 0]} receiveShadow>
        <meshPhysicalMaterial
          color="#8B7355"
          metalness={0.2}
          roughness={0.6}
          clearcoat={0.4}
          clearcoatRoughness={0.2}
          reflectivity={0.3}
        />
      </Box>

      {/* Marble pattern overlay */}
      <Circle args={[10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -7.9, 0]}>
        <meshPhysicalMaterial
          color="#9a8164"
          metalness={0.1}
          roughness={0.7}
          clearcoat={0.3}
          clearcoatRoughness={0.4}
          transparent
          opacity={0.5}
        />
      </Circle>

      {/* Base border detail */}
      <Box args={[20.4, 0.2, 20.4]} position={[0, -8.4, 0]} receiveShadow>
        <meshPhysicalMaterial
          color="#7a6347"
          metalness={0.3}
          roughness={0.5}
          clearcoat={0.4}
          clearcoatRoughness={0.2}
        />
      </Box>
    </>
  );
}