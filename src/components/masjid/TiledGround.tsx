import React from 'react';
import { Ring, Plane } from '@react-three/drei';
import { createTileTexture } from '../../utils/textureUtils';

export function TiledGround() {
  const tileTexture = createTileTexture();
  
  return (
    <group>
      {/* Main circular tiled floor */}
      <Ring
        args={[0, 100, 64]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -8.1, 0]}
        receiveShadow
      >
        <meshPhysicalMaterial
          map={tileTexture}
          metalness={0.1}
          roughness={0.2}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
          reflectivity={0.5}
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.05}
        />
      </Ring>

      {/* Decorative outer ring */}
      <Ring
        args={[100, 102.5, 64]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -8.15, 0]}
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#C5A572"
          metalness={0.4}
          roughness={0.3}
          clearcoat={0.3}
          reflectivity={0.7}
          emissive="#C5A572"
          emissiveIntensity={0.05}
        />
      </Ring>

      {/* Extended floor beyond the main area */}
      <Plane
        args={[400, 400]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -8.2, 0]}
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#f5f5f5"
          metalness={0.1}
          roughness={0.4}
          clearcoat={0.3}
          reflectivity={0.3}
        />
      </Plane>
    </group>
  );
}