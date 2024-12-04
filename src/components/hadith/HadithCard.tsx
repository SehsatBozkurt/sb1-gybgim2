import React, { useEffect, useRef } from 'react';
import { Hadith, Language } from '../../types/hadith';

interface HadithCardProps {
  hadith: Hadith;
  selectedLanguage: Language;
}

export function HadithCard({ hadith, selectedLanguage }: HadithCardProps) {
  const translationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (translationRef.current && selectedLanguage !== 'ar') {
      const parent = translationRef.current.parentNode;
      const nextSibling = translationRef.current.nextSibling;
      parent?.removeChild(translationRef.current);
      setTimeout(() => {
        parent?.insertBefore(translationRef.current!, nextSibling || null);
      }, 0);
    }
  }, [selectedLanguage]);

  return (
    <div className="p-6 border border-kaaba-gold/20 rounded-lg bg-gradient-card
                    hover:border-kaaba-gold/40 transition-all duration-300
                    backdrop-blur-sm">
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm text-kaaba-gold/60">
          {hadith.chapter}
        </span>
      </div>

      {/* Arabic section */}
      <div className="mb-6">
        <div className="text-right mb-2">
          <span className="text-kaaba-gold/60 text-lg font-amiri" dir="rtl" lang="ar">
            حديث رقم {hadith.number}
          </span>
        </div>
        <p className="text-2xl text-kaaba-gold font-amiri leading-relaxed text-right"
           dir="rtl"
           lang="ar">
          {hadith.arab}
        </p>
      </div>

      {/* English Translation */}
      <div className="pt-4 border-t border-kaaba-gold/10">
        <div className="mb-2">
          <span className="text-kaaba-gold/60">
            Hadith {hadith.number}
          </span>
        </div>
        <p className="text-lg text-kaaba-gold/80 leading-relaxed">
          {hadith.text}
        </p>
      </div>

      {/* Grade if available */}
      {hadith.grade && (
        <div className="mt-4 text-sm text-kaaba-gold/60">
          Grade: {hadith.grade}
        </div>
      )}
    </div>
  );
}