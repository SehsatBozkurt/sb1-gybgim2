import { HadithCollection } from './types';

export async function fetchHadithCollection(collection: string): Promise<HadithCollection> {
  const collectionMap: { [key: string]: string } = {
    'bukhari': '/bukhari.json',
    'muslim': '/muslim.json'
  };

  try {
    const filePath = collectionMap[collection];
    if (!filePath) {
      throw new Error(`Invalid collection: ${collection}`);
    }

    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading hadith collection:', error);
    throw new Error('Failed to load hadith collection. Please try again later.');
  }
}