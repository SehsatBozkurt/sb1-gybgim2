import { QuranApiResponse } from './types';

export async function fetchQuranData(): Promise<QuranApiResponse> {
  try {
    const response = await fetch('/quran-data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Quran data:', error);
    throw new Error('Failed to fetch Quran data. Please try again later.');
  }
}