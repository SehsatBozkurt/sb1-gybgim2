import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export function GateArch({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Main Pillars with Base and Capital */}
      {[-2.8, 2.8].map((x, i) => (
        <group key={`pillar-${i}`}>
          {/* Pillar Base */}
          <Box
            args={[1.6, 1, 1.6]}
            position={[x, -6.5, 0]}
            castShadow
          >
            <meshPhysicalMaterial
              color="#f5f5f5"
              metalness={0.2}
              roughness={0.5}
              clearcoat={0.4}
            />
          </Box>
          
          {/* Main Pillar Shaft */}
          <Cylinder
            args={[0.6, 0.7, 12, 8]}
            position={[x, 0, 0]}
            castShadow
          >
            <meshPhysicalMaterial
              color="#f5f5f5"
              metalness={0.1}
              roughness={0.6}
              clearcoat={0.3}
            />
          </Cylinder>
          
          {/* Pillar Capital */}
          <Box
            args={[1.4, 0.8, 1.4]}
            position={[x, 6.5, 0]}
            castShadow
          >
            <meshPhysicalMaterial
              color="#f5f5f5"
              metalness={0.2}
              roughness={0.5}
              clearcoat={0.4}
            />
          </Box>
        </group>
      ))}

      {/* Pointed Arch Structure */}
      <group position={[0, 6.5, 0]}>
        {/* Main arch structure using boxes for sharp edges */}
        <Box
          args={[6, 3, 0.4]}
          position={[0, 1.5, 0]}
          castShadow
        >
          <meshPhysicalMaterial
            color="#f5f5f5"
            metalness={0.1}
            roughness={0.6}
            clearcoat={0.4}
          />
        </Box>

        {/* Pointed top */}
        <Box
          args={[3, 2, 0.4]}
          position={[0, 3.5, 0]}
          rotation={[0, 0, Math.PI / 4]}
          castShadow
        >
          <meshPhysicalMaterial
            color="#f5f5f5"
            metalness={0.1}
            roughness={0.6}
            clearcoat={0.4}
          />
        </Box>

        {/* Inner arch detail */}
        <Box
          args={[5.6, 2.8, 0.4]}
          position={[0, 1.5, 0.2]}
          castShadow
        >
          <meshPhysicalMaterial
            color="#C5A572"
            metalness={0.4}
            roughness={0.3}
            clearcoat={0.5}
            emissive="#C5A572"
            emissiveIntensity={0.1}
          />
        </Box>
      </group>

      {/* Decorative Top Structure */}
      <group position={[0, 9.5, 0]}>
        {/* Base Platform */}
        <Box
          args={[7, 0.6, 2]}
          castShadow
        >
          <meshPhysicalMaterial
            color="#C5A572"
            metalness={0.4}
            roughness={0.3}
            clearcoat={0.5}
          />
        </Box>

        {/* Central Dome */}
        <group position={[0, 1.5, 0]}>
          {/* Dome Base */}
          <Cylinder
            args={[1.2, 1.4, 1, 8]}
            position={[0, -0.2, 0]}
            castShadow
          >
            <meshPhysicalMaterial
              color="#C5A572"
              metalness={0.4}
              roughness={0.3}
              clearcoat={0.5}
            />
          </Cylinder>

          {/* Main Dome */}
          <Cylinder
            args={[0, 1.2, 1.8, 16]}
            position={[0, 1, 0]}
            castShadow
          >
            <meshPhysicalMaterial
              color="#C5A572"
              metalness={0.4}
              roughness={0.3}
              clearcoat={0.5}
              emissive="#C5A572"
              emissiveIntensity={0.1}
            />
          </Cylinder>

          {/* Finial */}
          <Cylinder
            args={[0.1, 0.1, 0.8, 8]}
            position={[0, 2.2, 0]}
            castShadow
          >
            <meshPhysicalMaterial
              color="#C5A572"
              metalness={0.6}
              roughness={0.2}
              clearcoat={0.6}
            />
          </Cylinder>
        </group>

        {/* Side Domes */}
        {[-2.5, 2.5].map((x, i) => (
          <group key={`side-dome-${i}`} position={[x, 0.8, 0]}>
            <Cylinder
              args={[0, 0.6, 1, 16]}
              castShadow
            >
              <meshPhysicalMaterial
                color="#C5A572"
                metalness={0.4}
                roughness={0.3}
                clearcoat={0.5}
              />
            </Cylinder>
          </group>
        ))}
      </group>

      {/* Decorative Base */}
      <Box
        args={[7, 0.8, 2.5]}
        position={[0, -7, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color="#C5A572"
          metalness={0.4}
          roughness={0.3}
          clearcoat={0.5}
        />
      </Box>

      {/* Islamic Calligraphy Panel */}
      <Box
        args={[4, 1.2, 0.2]}
        position={[0, 4, 0.6]}
        castShadow
      >
        <meshPhysicalMaterial
          color="#C5A572"
          metalness={0.4}
          roughness={0.3}
          clearcoat={0.5}
          emissive="#C5A572"
          emissiveIntensity={0.1}
        />
      </Box>
    </group>
  );
}