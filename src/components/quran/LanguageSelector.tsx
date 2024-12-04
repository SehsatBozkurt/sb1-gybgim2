import React from 'react';
import { Language, LanguageOption } from '../../types/quran';

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languages: LanguageOption[] = [
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'en', name: 'English', nativeName: 'English' },
];

export function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-4 py-2 rounded-lg border ${
            selectedLanguage === lang.code
              ? 'border-kaaba-gold bg-kaaba-gold/10 text-kaaba-gold'
              : 'border-kaaba-gold/20 text-kaaba-gold/60 hover:border-kaaba-gold/40'
          } transition-colors`}
        >
          <span className="block text-xs">{lang.nativeName}</span>
          <span className="block text-sm">{lang.name}</span>
        </button>
      ))}
    </div>
  );
}