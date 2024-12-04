import { Hadith, HadithResponse } from '../types/hadith';
import { parseCSV, convertToHadith } from './csvParser';

const ITEMS_PER_PAGE = 20;

let hadithCache: {
  [key: string]: Hadith[];
} = {};

async function loadHadithCollection(collection: string): Promise<Hadith[]> {
  if (hadithCache[collection]) {
    return hadithCache[collection];
  }

  try {
    const filePath = `/src/${collection === 'bukhari' ? 'sahih_al-bukhari_ahadith.utf8.csv' : 'sahih_muslim_ahadith.utf8.csv'}`;
    const rows = await parseCSV(filePath);
    // Skip header row and convert remaining rows to Hadith objects
    const hadiths = rows.slice(1).map(row => convertToHadith(row, collection));
    hadithCache[collection] = hadiths;
    return hadiths;
  } catch (error) {
    console.error('Error loading hadith collection:', error);
    throw error;
  }
}

export async function fetchHadithsByCollection(
  collection: string,
  page: number = 1,
  limit: number = ITEMS_PER_PAGE
): Promise<HadithResponse> {
  try {
    const hadiths = await loadHadithCollection(collection);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    return {
      hadiths: hadiths.slice(startIndex, endIndex),
      total: hadiths.length
    };
  } catch (error) {
    console.error('Error fetching hadiths:', error);
    throw error;
  }
}

export async function searchHadiths(
  collection: string,
  query: string
): Promise<HadithResponse> {
  try {
    const hadiths = await loadHadithCollection(collection);
    const searchResults = hadiths.filter(hadith => 
      hadith.text.toLowerCase().includes(query.toLowerCase()) ||
      hadith.arab.includes(query)
    );
    
    return {
      hadiths: searchResults.slice(0, ITEMS_PER_PAGE),
      total: searchResults.length
    };
  } catch (error) {
    console.error('Error searching hadiths:', error);
    throw error;
  }
}