import { Verse, Surah } from '../../types/quran';

interface QuranCache {
  surahs: Surah[];
  verses: {
    [key: string]: Verse[];
  };
}

export const quranCache: QuranCache = {
  surahs: [],
  verses: {}
};