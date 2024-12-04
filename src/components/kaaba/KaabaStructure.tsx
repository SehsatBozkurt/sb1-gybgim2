import React from 'react';
import { Box, Sphere } from '@react-three/drei';
import { createKiswahTexture } from '../../utils/materials';

export function KaabaStructure() {
  const kiswahTexture = createKiswahTexture();

  // Helper function to create vertical corner points spanning the entire edge
  const createCornerPoints = (basePosition: number[]) => {
    const points = [];
    const totalHeight = 15; // Total height of the Kaaba
    const numberOfPoints = 4; // Reduced from 5 to 4 points
    const spacing = totalHeight / (numberOfPoints + 1); // Adjust spacing for 4 points
    const size = 0.3; // Point size
    
    for (let i = 0; i < numberOfPoints; i++) {
      // Adjust starting position to exclude the top point
      const yOffset = (-totalHeight / 2) + spacing * (i + 1);
      const position = [basePosition[0], yOffset, basePosition[2]];
      
      points.push(
        <Sphere
          key={`point-${i}`}
          args={[size, 16, 16]}
          position={position}
        >
          <meshPhysicalMaterial
            color="#C5A572"
            metalness={0.9}
            roughness={0.2}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
            reflectivity={1}
            emissive="#C5A572"
            emissiveIntensity={0.3}
          />
        </Sphere>
      );
    }
    return points;
  };

  return (
    <>
      {/* Main Structure */}
      <Box args={[15, 15, 15]} position={[0, 0, 0]} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#000000"
          metalness={0.1}
          roughness={0.7}
          clearcoat={0.3}
          clearcoatRoughness={0.4}
          reflectivity={0.2}
        />
      </Box>

      {/* Kiswah Layer */}
      <Box args={[15.02, 15.02, 15.02]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#000000"
          metalness={0.2}
          roughness={0.6}
          map={kiswahTexture}
          transparent
          opacity={1}
          clearcoat={0.4}
          clearcoatRoughness={0.3}
          reflectivity={0.3}
        />
      </Box>

      {/* Golden Band (Hizam) */}
      <Box args={[15.1, 1.8, 15.1]} position={[0, 5, 0]}>
        <meshPhysicalMaterial
          color="#C5A572"
          metalness={0.9}
          roughness={0.2}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          reflectivity={1}
          emissive="#C5A572"
          emissiveIntensity={0.3}
        />
      </Box>

      {/* Corner Pieces with Extended Points */}
      {[[-7.55, 0, -7.55], [7.55, 0, -7.55], [-7.55, 0, 7.55], [7.55, 0, 7.55]].map((pos, i) => (
        <React.Fragment key={i}>
          {/* Thicker corner pieces */}
          <Box args={[0.8, 15, 0.8]} position={pos}>
            <meshPhysicalMaterial
              color="#C5A572"
              metalness={0.9}
              roughness={0.2}
              clearcoat={0.8}
              clearcoatRoughness={0.1}
              reflectivity={1}
              emissive="#C5A572"
              emissiveIntensity={0.3}
            />
          </Box>
          {/* Add vertical points spanning the entire edge */}
          {createCornerPoints([pos[0] + 0.6, pos[1], pos[2]])}
        </React.Fragment>
      ))}

      {/* Top rim - black */}
      <Box args={[15.2, 0.4, 15.2]} position={[0, 7.5, 0]}>
        <meshPhysicalMaterial
          color="#000000"
          metalness={0.1}
          roughness={0.8}
          clearcoat={0.2}
          reflectivity={0.2}
        />
      </Box>

      {/* Bottom rim - black */}
      <Box args={[15.2, 0.4, 15.2]} position={[0, -7.5, 0]}>
        <meshPhysicalMaterial
          color="#000000"
          metalness={0.1}
          roughness={0.8}
          clearcoat={0.2}
          reflectivity={0.2}
        />
      </Box>

      {/* Corner reinforcements */}
      {[[-7.55, 0, -7.55], [7.55, 0, -7.55], [-7.55, 0, 7.55], [7.55, 0, 7.55]].map((pos, i) => (
        <Box key={`corner-${i}`} args={[1.2, 15.2, 1.2]} position={pos}>
          <meshPhysicalMaterial
            color="#000000"
            metalness={0.1}
            roughness={0.8}
            clearcoat={0.2}
            opacity={0.8}
            transparent
          />
        </Box>
      ))}
    </>
  );
}