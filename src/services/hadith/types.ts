import { Language } from '../../types/hadith';

export interface HadithData {
  number: number;
  arab: string;
  text: string;
  chapter: string;
  grade?: string;
}

export interface HadithCollection {
  hadiths: HadithData[];
  name: string;
  description: string;
  total: number;
}

export interface HadithResponse {
  hadiths: HadithData[];
  total: number;
}

export interface HadithCache {
  [key: string]: HadithCollection;
}