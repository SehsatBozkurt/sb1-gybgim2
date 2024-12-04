import React from 'react';
import { GateArch } from './GateArch';

export function Gates() {
  const radius = 50;
  const gateWidth = 7; // Width of each gate
  
  // Calculate circumference and number of gates needed
  const circumference = 2 * Math.PI * radius;
  const gateCount = Math.floor(circumference / gateWidth);
  
  const gates = Array.from({ length: gateCount }, (_, i) => {
    const angle = (i / gateCount) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    
    // Calculate rotation to face center (Kaaba)
    const rotation = [0, Math.atan2(x, z), 0];
    
    return {
      position: [x, -1, z], // baseHeight = -1
      rotation: rotation
    };
  });

  return (
    <group>
      {gates.map((gate, index) => (
        <GateArch
          key={index}
          position={gate.position}
          rotation={gate.rotation}
        />
      ))}
    </group>
  );
}