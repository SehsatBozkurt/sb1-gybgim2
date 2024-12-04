import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { fetchSurahs } from '../services/quran';
import type { Surah } from '../types/quran';

export function QuranBrowser() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadSurahs = async () => {
      try {
        setLoading(true);
        const data = await fetchSurahs();
        setSurahs(data);
      } catch (err) {
        setError('Failed to load surahs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadSurahs();
  }, []);

  const filteredSurahs = surahs.filter(surah => 
    surah.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    surah.arabicName.includes(searchQuery)
  );

  return (
    <div className="min-h-screen pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-[1px] bg-kaaba-gold mx-auto mb-8" />
          <h1 className="text-4xl sm:text-5xl font-bold text-kaaba-gold mb-4">
            The Noble Quran
          </h1>
          <p className="text-lg text-kaaba-gold/80 max-w-2xl mx-auto">
            Browse and search through the divine revelation
          </p>
          <div className="w-16 h-[1px] bg-kaaba-gold mx-auto mt-8" />
        </div>

        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search surahs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-black/50 border border-kaaba-gold/20 rounded-lg
                       text-kaaba-gold placeholder-kaaba-gold/50 focus:outline-none focus:border-kaaba-gold/40
                       transition-colors backdrop-blur-sm"
            />
            <Search 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-kaaba-gold/50" 
              size={20}
            />
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-center mb-8 p-4 border border-red-500/20 rounded-lg">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSurahs.map((surah) => (
            <Link
              key={surah.number}
              to={`/quran/${surah.number}`}
              className="group relative overflow-hidden rounded-lg border border-kaaba-gold/20 
                       hover:border-kaaba-gold/40 transition-all duration-500 p-6
                       bg-gradient-card backdrop-blur-sm hover:transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-kaaba-gold">
                  {surah.number}
                </span>
                <span className="text-lg text-kaaba-gold/60">
                  {surah.versesCount} verses
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-kaaba-gold mb-2">
                {surah.name}
              </h2>
              
              <p className="text-2xl text-kaaba-gold/90 font-amiri text-right mb-2">
                {surah.arabicName}
              </p>
              
              <span className="text-sm text-kaaba-gold/60">
                {surah.revelationType}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}