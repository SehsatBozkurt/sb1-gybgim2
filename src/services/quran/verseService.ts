import { Verse, QuranResponse } from '../../types/quran';
import { quranCache } from './cache';
import { fetchQuranData } from './api';

const ITEMS_PER_PAGE = 20;

export async function fetchVersesBySurah(
  surahNumber: number,
  page: number = 1
): Promise<QuranResponse> {
  const cacheKey = `surah-${surahNumber}`;

  try {
    if (!quranCache.verses[cacheKey]) {
      const data = await fetchQuranData();
      const surah = data.surahs.find((s) => s.number === surahNumber);
      
      if (!surah) {
        throw new Error(`Surah ${surahNumber} not found`);
      }

      const verses = surah.ayahs.map((ayah) => ({
        id: `${surahNumber}-${ayah.numberInSurah}`,
        surahNumber,
        verseNumber: ayah.numberInSurah,
        arabic: ayah.text,
        english: ayah.translations.en,
        german: ayah.translations.de
      }));

      quranCache.verses[cacheKey] = verses;
    }

    const verses = quranCache.verses[cacheKey];
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return {
      verses: verses.slice(startIndex, endIndex),
      total: verses.length
    };
  } catch (error) {
    console.error('Error fetching verses:', error);
    throw new Error('Failed to load verses. Please try again later.');
  }
}

export async function searchVerses(
  query: string,
  language: string = 'ar'
): Promise<QuranResponse> {
  try {
    const allVerses: Verse[] = [];
    
    Object.values(quranCache.verses).forEach(surahVerses => {
      surahVerses.forEach(verse => {
        const searchText = language === 'ar' ? verse.arabic :
                         language === 'de' ? verse.german :
                         verse.english;
        
        if (searchText.toLowerCase().includes(query.toLowerCase())) {
          allVerses.push(verse);
        }
      });
    });

    return {
      verses: allVerses.slice(0, ITEMS_PER_PAGE),
      total: allVerses.length
    };
  } catch (error) {
    console.error('Error searching verses:', error);
    throw new Error('Failed to search verses. Please try again later.');
  }
}