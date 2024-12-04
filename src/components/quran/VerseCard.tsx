import React from 'react';
import { Verse, Language } from '../../types/quran';

interface VerseCardProps {
  verse: Verse;
  selectedLanguage: Language;
}

export function VerseCard({ verse, selectedLanguage }: VerseCardProps) {
  const getVerseText = () => {
    switch (selectedLanguage) {
      case 'ar':
        return verse.arabic;
      case 'de':
        return verse.german;
      case 'en':
        return verse.english;
      default:
        return verse.arabic;
    }
  };

  return (
    <div className="p-6 border border-kaaba-gold/20 rounded-lg bg-gradient-card
                    hover:border-kaaba-gold/40 transition-all duration-300
                    backdrop-blur-sm">
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm text-kaaba-gold/60">
          Verse {verse.verseNumber}
        </span>
      </div>

      {selectedLanguage === 'ar' ? (
        <p className="text-2xl text-kaaba-gold mb-6 font-amiri leading-relaxed text-right"
           dir="rtl"
           lang="ar">
          {getVerseText()}
        </p>
      ) : (
        <p className="text-lg text-kaaba-gold/80 leading-relaxed"
           lang={selectedLanguage}>
          {getVerseText()}
        </p>
      )}

      {/* Show Arabic text alongside translations */}
      {selectedLanguage !== 'ar' && (
        <p className="text-xl text-kaaba-gold/60 font-amiri leading-relaxed text-right mt-4 pt-4 border-t border-kaaba-gold/10"
           dir="rtl"
           lang="ar">
          {verse.arabic}
        </p>
      )}
    </div>
  );
}