import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search, Loader } from 'lucide-react';
import { fetchVersesBySurah } from '../services/quran';
import { LanguageSelector } from '../components/quran/LanguageSelector';
import { VerseCard } from '../components/quran/VerseCard';
import type { Verse, Language } from '../types/quran';

export function SurahView() {
  const { surahNumber } = useParams<{ surahNumber: string }>();
  const [verses, setVerses] = useState<Verse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('ar');

  useEffect(() => {
    const loadVerses = async () => {
      try {
        setLoading(true);
        const data = await fetchVersesBySurah(parseInt(surahNumber!, 10), currentPage);
        setVerses(data.verses);
        setTotalPages(Math.ceil(data.total / 20));
      } catch (err) {
        setError('Failed to load verses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (surahNumber) {
      loadVerses();
    }
  }, [surahNumber, currentPage]);

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      buttons.push(
        <button
          key="1"
          onClick={() => setCurrentPage(1)}
          className="w-10 h-10 rounded-lg border border-kaaba-gold/20 text-kaaba-gold/60 
                   hover:border-kaaba-gold/40 transition-colors"
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(
          <span key="ellipsis1" className="px-2 text-kaaba-gold/60">...</span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-10 h-10 rounded-lg border ${
            currentPage === i
              ? 'border-kaaba-gold bg-kaaba-gold/10 text-kaaba-gold'
              : 'border-kaaba-gold/20 text-kaaba-gold/60 hover:border-kaaba-gold/40'
          } transition-colors`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="ellipsis2" className="px-2 text-kaaba-gold/60">...</span>
        );
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className="w-10 h-10 rounded-lg border border-kaaba-gold/20 text-kaaba-gold/60 
                   hover:border-kaaba-gold/40 transition-colors"
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="min-h-screen pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/quran"
            className="inline-flex items-center text-kaaba-gold hover:text-kaaba-gold/80 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Surahs
          </Link>
        </div>

        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />

        {error && (
          <div className="text-red-500 text-center mb-8 p-4 border border-red-500/20 rounded-lg">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader className="w-8 h-8 animate-spin text-kaaba-gold" />
          </div>
        ) : (
          <div className="space-y-6">
            {verses.map((verse) => (
              <VerseCard
                key={verse.id}
                verse={verse}
                selectedLanguage={selectedLanguage}
              />
            ))}
          </div>
        )}

        {!loading && verses.length > 0 && (
          <div className="mt-8 flex justify-center gap-2">
            {renderPaginationButtons()}
          </div>
        )}
      </div>
    </div>
  );
}