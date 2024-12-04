import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { IslamicPattern } from './components/IslamicPattern';
import { HadithPage } from './pages/HadithPage';
import { QuranPage } from './pages/QuranPage';
import { PrayerPage } from './pages/PrayerPage';
import { FiguresPage } from './pages/FiguresPage';
import { FundamentalsPage } from './pages/FundamentalsPage';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white relative">
        <div className="noise" />
        <div className="bg-gradient-elegant absolute inset-0" />
        <IslamicPattern />
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="flex-1 relative z-10">
              <Hero />
              <Features />
            </main>
          } />
          <Route path="/hadith/*" element={<HadithPage />} />
          <Route path="/quran/*" element={<QuranPage />} />
          <Route path="/prayer" element={<PrayerPage />} />
          <Route path="/figures/*" element={<FiguresPage />} />
          <Route path="/fundamentals/*" element={<FundamentalsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;