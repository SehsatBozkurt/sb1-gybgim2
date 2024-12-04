export interface Verse {
  id: string;
  surahNumber: number;
  verseNumber: number;
  arabic: string;
  german: string;
  english: string;
}

export interface Surah {
  number: number;
  name: string;
  arabicName: string;
  versesCount: number;
  revelationType: string;
}

export interface QuranResponse {
  verses: Verse[];
  total: number;
}

export type Language = 'ar' | 'de' | 'en';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}