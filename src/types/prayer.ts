export interface PrayerTimes {
  Imsak: string;
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

export interface PrayerLocation {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface PrayerResponse {
  status: string;
  results: {
    datetime: Array<{
      times: PrayerTimes;
      date: {
        timestamp: number;
        gregorian: string;
        hijri: string;
      };
    }>;
    location: PrayerLocation;
  };
}