export interface QuranApiResponse {
  surahs: {
    number: number;
    name: string;
    englishName: string;
    arabicName: string;
    revelationType: string;
    ayahs: {
      number: number;
      numberInSurah: number;
      text: string;
      translations: {
        en: string;
        de: string;
      };
    }[];
  }[];
}