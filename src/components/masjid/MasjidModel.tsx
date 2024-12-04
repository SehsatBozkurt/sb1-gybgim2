import React from 'react';
import { Courtyard } from './Courtyard';
import { Minarets } from './Minarets';
import { KaabaModel } from '../kaaba/KaabaModel';
import { Tawaf } from './Tawaf';
import { Gates } from './gates/Gates';

export function MasjidModel() {
  return (
    <group>
      <Courtyard />
      <Minarets />
      <KaabaModel />
      <Tawaf />
      <Gates />
    </group>
  );
}