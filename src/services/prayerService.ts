import axios from 'axios';
import { PrayerResponse } from '../types/prayer';

const API_URL = 'https://api.aladhan.com/v1/timingsByCity';

export async function fetchPrayerTimes(): Promise<PrayerResponse> {
  try {
    // First try to get user's location using IP geolocation
    const geoResponse = await axios.get('https://ipapi.co/json/');
    const { city, country } = geoResponse.data;

    // Then fetch prayer times for that location
    const response = await axios.get(API_URL, {
      params: {
        city,
        country,
        method: 2, // Islamic Society of North America calculation method
      }
    });

    // Transform aladhan.com API response to match our interface
    const { data } = response.data;
    return {
      status: 'OK',
      results: {
        datetime: [{
          times: {
            Imsak: data.timings.Imsak,
            Fajr: data.timings.Fajr,
            Dhuhr: data.timings.Dhuhr,
            Asr: data.timings.Asr,
            Maghrib: data.timings.Maghrib,
            Isha: data.timings.Isha
          },
          date: {
            timestamp: Date.now(),
            gregorian: data.date.gregorian.date,
            hijri: data.date.hijri.date
          }
        }],
        location: {
          city,
          country,
          latitude: geoResponse.data.latitude,
          longitude: geoResponse.data.longitude
        }
      }
    };
  } catch (error) {
    console.error('Error fetching prayer times:', error);
    throw new Error('Failed to fetch prayer times');
  }
}