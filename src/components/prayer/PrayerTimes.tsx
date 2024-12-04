import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { fetchPrayerTimes } from '../../services/prayerService';
import { PrayerCard } from './PrayerCard';
import type { PrayerTimes as IPrayerTimes } from '../../types/prayer';

export function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState<IPrayerTimes | null>(null);
  const [location, setLocation] = useState({ city: '', country: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const loadPrayerTimes = async () => {
      try {
        setLoading(true);
        const data = await fetchPrayerTimes();
        setPrayerTimes(data.results.datetime[0].times);
        setLocation({
          city: data.results.location.city,
          country: data.results.location.country
        });
        setError('');
      } catch (err) {
        setError('Failed to load prayer times. Please check your internet connection and try again.');
      } finally {
        setLoading(false);
      }
    };

    loadPrayerTimes();

    // Update current time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const getNextPrayer = (times: IPrayerTimes): keyof IPrayerTimes => {
    const now = format(currentTime, 'HH:mm');
    const prayers: (keyof IPrayerTimes)[] = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    
    for (const prayer of prayers) {
      if (times[prayer] > now) {
        return prayer;
      }
    }
    return 'Fajr';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-kaaba-gold"></div>
      </div>
    );
  }

  if (error || !prayerTimes) {
    return (
      <div className="text-red-500 text-center p-4 border border-red-500/20 rounded-lg">
        {error || 'Unable to load prayer times'}
      </div>
    );
  }

  const nextPrayer = getNextPrayer(prayerTimes);

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl bg-black/50 backdrop-blur-sm
                    border border-kaaba-gold/20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-kaaba-gold mb-4">Prayer Times</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 text-kaaba-gold/60">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location.city}, {location.country}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{format(currentTime, 'dd MMM yyyy')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{format(currentTime, 'HH:mm')}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {Object.entries(prayerTimes).map(([name, time]) => (
          <PrayerCard
            key={name}
            name={name as keyof IPrayerTimes}
            time={time}
            isNext={name === nextPrayer}
          />
        ))}
      </div>
    </div>
  );
}