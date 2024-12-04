import { Hadith } from '../types/hadith';

export async function parseCSV(filePath: string): Promise<string[][]> {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV file: ${response.statusText}`);
    }
    const text = await response.text();
    return text.split('\n').map(row => 
      row.split(',').map(cell => 
        cell.trim().replace(/^"|"$/g, '') // Remove quotes
      )
    );
  } catch (error) {
    console.error('Error parsing CSV:', error);
    throw error;
  }
}

export function convertToHadith(row: string[], collection: string): Hadith {
  return {
    id: `${collection}-${row[0]}`,
    number: parseInt(row[0], 10),
    arab: row[1],
    text: row[2],
    chapter: row[3] || 'General',
    book: collection,
    grade: row[4] || 'Sahih'
  };
}