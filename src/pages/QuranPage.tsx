import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QuranBrowser } from './QuranBrowser';
import { SurahView } from './SurahView';

export function QuranPage() {
  return (
    <Routes>
      <Route path="/" element={<QuranBrowser />} />
      <Route path=":surahNumber" element={<SurahView />} />
    </Routes>
  );
}