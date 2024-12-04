import { Verse, Surah, QuranResponse } from '../types/quran';

// Cache for storing loaded data
const cache: {
  surahs: Surah[];
  verses: { [key: string]: Verse[] };
} = {
  surahs: [],
  verses: {}
};

const ITEMS_PER_PAGE = 20;

// Load the Quran data from the local JSON file
async function loadQuranData() {
  try {
    const response = await fetch('/quran-data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading Quran data:', error);
    throw new Error('Failed to load Quran data. Please try again later.');
  }
}

export async function fetchSurahs(): Promise<Surah[]> {
  if (cache.surahs.length > 0) {
    return cache.surahs;
  }

  try {
    const data = await loadQuranData();
    
    const surahs = data.surahs.map((surah: any) => ({
      number: surah.number,
      name: surah.englishName,
      arabicName: surah.arabicName,
      versesCount: surah.ayahs.length,
      revelationType: surah.revelationType
    }));
    
    cache.surahs = surahs;
    return surahs;
  } catch (error) {
    console.error('Error loading surahs:', error);
    throw new Error('Failed to load surahs. Please try again later.');
  }
}

export async function fetchVersesBySurah(
  surahNumber: number,
  page: number = 1
): Promise<QuranResponse> {
  const cacheKey = `surah-${surahNumber}`;

  try {
    if (!cache.verses[cacheKey]) {
      const data = await loadQuranData();
      const surah = data.surahs.find((s: any) => s.number === surahNumber);
      
      if (!surah) {
        throw new Error(`Surah ${surahNumber} not found`);
      }

      const verses = surah.ayahs.map((ayah: any) => ({
        id: `${surahNumber}-${ayah.numberInSurah}`,
        surahNumber,
        verseNumber: ayah.numberInSurah,
        arabic: ayah.text,
        english: ayah.translations.en,
        german: ayah.translations.de
      }));

      cache.verses[cacheKey] = verses;
    }

    const verses = cache.verses[cacheKey];
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
    
    Object.values(cache.verses).forEach(surahVerses => {
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