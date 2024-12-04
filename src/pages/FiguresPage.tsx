import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FiguresBrowser } from './figures/FiguresBrowser';
import { ProphetView } from './figures/ProphetView';
import { CompanionView } from './figures/CompanionView';
import { ScholarView } from './figures/ScholarView';
import { RulerView } from './figures/RulerView';

export function FiguresPage() {
  return (
    <Routes>
      <Route path="/" element={<FiguresBrowser />} />
      <Route path="/prophets/:id" element={<ProphetView />} />
      <Route path="/companions/:id" element={<CompanionView />} />
      <Route path="/scholars/:id" element={<ScholarView />} />
      <Route path="/rulers/:id" element={<RulerView />} />
    </Routes>
  );
}