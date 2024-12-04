import React from 'react';
import { Ring } from '@react-three/drei';

export function Tawaf() {
  return (
    <>
      {/* Main Tawaf area - smaller radius */}
      <Ring
        args={[20, 45, 64]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -8, 0]}
        receiveShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.05}
          roughness={0.7}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </Ring>
      
      {/* Inner circle with enhanced brightness */}
      <Ring
        args={[20, 21, 64]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -8.05, 0]}
        receiveShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.1}
          roughness={0.6}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </Ring>
      
      {/* Outer circle with enhanced brightness */}
      <Ring
        args={[44, 45, 64]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -8.05, 0]}
        receiveShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.1}
          roughness={0.6}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </Ring>

      {/* Additional decorative rings */}
      {[30, 38].map((radius, index) => (
        <Ring
          key={index}
          args={[radius, radius + 0.5, 64]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -8.03, 0]}
          receiveShadow
        >
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.1}
            roughness={0.6}
            emissive="#ffffff"
            emissiveIntensity={0.1}
          />
        </Ring>
      ))}
    </>
  );
}