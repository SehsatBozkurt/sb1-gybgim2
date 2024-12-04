import { HadithResponse, HadithCollection } from './types';
import { hadithCache } from './cache';
import { fetchHadithCollection } from './api';

const ITEMS_PER_PAGE = 20;

async function loadHadithCollection(collection: string): Promise<HadithCollection> {
  if (hadithCache[collection]) {
    return hadithCache[collection];
  }

  try {
    const data = await fetchHadithCollection(collection);
    
    // Ensure hadiths array exists and has the correct structure
    if (!Array.isArray(data.hadiths)) {
      throw new Error('Invalid hadith data structure');
    }
    
    // Add collection metadata if not present
    const enrichedData: HadithCollection = {
      ...data,
      name: data.name || (collection === 'bukhari' ? 'Sahih al-Bukhari' : 'Sahih Muslim'),
      description: data.description || (collection === 'bukhari' 
        ? 'The most authentic collection of Hadith'
        : 'The second most authentic collection of Hadith'),
      total: data.hadiths.length
    };

    hadithCache[collection] = enrichedData;
    return enrichedData;
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
    const data = await loadHadithCollection(collection);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    return {
      hadiths: data.hadiths.slice(startIndex, endIndex),
      total: data.total
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
    const data = await loadHadithCollection(collection);
    const searchResults = data.hadiths.filter(hadith => 
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