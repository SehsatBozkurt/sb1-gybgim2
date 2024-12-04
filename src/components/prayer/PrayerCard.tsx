import React from 'react';
import { Clock } from 'lucide-react';
import { PrayerTimes } from '../../types/prayer';

interface PrayerCardProps {
  name: keyof PrayerTimes;
  time: string;
  isNext: boolean;
}

export function PrayerCard({ name, time, isNext }: PrayerCardProps) {
  return (
    <div className={`flex justify-between items-center p-4 rounded-lg border
                    ${isNext 
                      ? 'border-kaaba-gold bg-kaaba-gold/10 text-kaaba-gold' 
                      : 'border-kaaba-gold/20 text-kaaba-gold/60'}`}>
      <div className="flex items-center gap-3">
        <Clock className={`w-5 h-5 ${isNext ? 'text-kaaba-gold' : 'text-kaaba-gold/60'}`} />
        <span className="font-medium">{name}</span>
      </div>
      <span className={`font-semibold ${isNext ? 'text-kaaba-gold' : 'text-kaaba-gold/80'}`}>
        {time}
      </span>
    </div>
  );
}