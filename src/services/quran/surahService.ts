import { Surah } from '../../types/quran';
import { quranCache } from './cache';
import { fetchQuranData } from './api';

export async function fetchSurahs(): Promise<Surah[]> {
  if (quranCache.surahs.length > 0) {
    return quranCache.surahs;
  }

  try {
    const data = await fetchQuranData();
    
    const surahs = data.surahs.map((surah) => ({
      number: surah.number,
      name: surah.englishName,
      arabicName: surah.arabicName,
      versesCount: surah.ayahs.length,
      revelationType: surah.revelationType
    }));
    
    quranCache.surahs = surahs;
    return surahs;
  } catch (error) {
    console.error('Error loading surahs:', error);
    throw new Error('Failed to load surahs. Please try again later.');
  }
}