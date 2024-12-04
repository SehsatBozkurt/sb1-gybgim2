import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { KaabaStructure } from './kaaba/KaabaStructure';
import { KaabaDoor } from './kaaba/KaabaDoor';
import { KaabaBase } from './kaaba/KaabaBase';

export function KaabaModel() {
  const kaabaRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (kaabaRef.current) {
      kaabaRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={kaabaRef}>
      <KaabaStructure />
      <KaabaDoor />
      <KaabaBase />
    </group>
  );
}