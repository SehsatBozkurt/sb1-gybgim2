import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, ArrowLeft, Loader } from 'lucide-react';
import { fetchHadithsByCollection, searchHadiths } from '../services/hadithService';
import { LanguageSelector } from '../components/hadith/LanguageSelector';
import { HadithCard } from '../components/hadith/HadithCard';
import type { Hadith, Language } from '../types/hadith';

export function HadithCollection() {
  const { collection } = useParams<{ collection: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hadiths, setHadiths] = useState<Hadith[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('ar');

  const collectionInfo = {
    bukhari: {
      title: 'Sahih al-Bukhari',
      description: 'The most authentic collection of Hadith',
      totalHadiths: 7563
    },
    muslim: {
      title: 'Sahih Muslim',
      description: 'The second most authentic collection of Hadith',
      totalHadiths: 7500
    }
  }[collection || 'bukhari'];

  useEffect(() => {
    const fetchHadiths = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await fetchHadithsByCollection(collection || 'bukhari', currentPage);
        setHadiths(data.hadiths);
        setTotalPages(Math.ceil(data.total / 20));
      } catch (err) {
        setError('Failed to load hadiths. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchHadiths();
  }, [collection, currentPage]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    try {
      setLoading(true);
      setError('');
      const data = await searchHadiths(collection || 'bukhari', searchQuery);
      setHadiths(data.hadiths);
      setTotalPages(Math.ceil(data.total / 20));
      setCurrentPage(1);
    } catch (err) {
      setError('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
            to="/hadith"
            className="inline-flex items-center text-kaaba-gold hover:text-kaaba-gold/80 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Collections
          </Link>
        </div>

        <div className="mb-12">
          <div className="w-24 h-[1px] bg-kaaba-gold mb-8" />
          <h1 className="text-4xl font-bold text-kaaba-gold mb-4">
            {collectionInfo.title}
          </h1>
          <p className="text-kaaba-gold/80">
            {collectionInfo.description} • {collectionInfo.totalHadiths} hadiths
          </p>
        </div>

        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search within collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full px-6 py-4 bg-black/50 border border-kaaba-gold/20 rounded-lg
                       text-kaaba-gold placeholder-kaaba-gold/50 focus:outline-none focus:border-kaaba-gold/40
                       transition-colors backdrop-blur-sm"
            />
            <button
              onClick={handleSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-kaaba-gold/50
                       hover:text-kaaba-gold transition-colors"
            >
              <Search size={20} />
            </button>
          </div>
        </div>

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
            {hadiths.length > 0 ? (
              hadiths.map((hadith) => (
                <HadithCard
                  key={hadith.id}
                  hadith={hadith}
                  selectedLanguage={selectedLanguage}
                />
              ))
            ) : (
              <div className="text-center py-12 text-kaaba-gold/60">
                No hadiths found. Try adjusting your search criteria.
              </div>
            )}
          </div>
        )}

        {!loading && hadiths.length > 0 && (
          <div className="mt-8 flex justify-center gap-2">
            {renderPaginationButtons()}
          </div>
        )}
      </div>
    </div>
  );
}