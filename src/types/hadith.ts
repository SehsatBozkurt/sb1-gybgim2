export interface Hadith {
  id: string;
  number: number;
  arab: string;
  text: string;
  chapter: string;
  book: string;
  grade?: string;
}

export interface HadithResponse {
  hadiths: Hadith[];
  total: number;
}

export type Language = 'ar' | 'de' | 'tr' | 'en' | 'fr';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}