import React from 'react';
import { PrayerTimes } from '../components/prayer/PrayerTimes';
import { Book } from 'lucide-react';

export function PrayerPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-[1px] bg-kaaba-gold mx-auto mb-8" />
          <h1 className="text-4xl sm:text-5xl font-bold text-kaaba-gold mb-4">
            Prayer Times
          </h1>
          <p className="text-lg text-kaaba-gold/80 max-w-2xl mx-auto">
            Find accurate prayer times for your location and learn about prayer in Islam
          </p>
          <div className="w-16 h-[1px] bg-kaaba-gold mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <PrayerTimes />
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-black/50 backdrop-blur-sm
                          border border-kaaba-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <Book className="w-6 h-6 text-kaaba-gold" />
                <h3 className="text-xl font-semibold text-kaaba-gold">
                  Prayer Instructions
                </h3>
              </div>
              <div className="prose prose-invert prose-gold">
                <p className="text-kaaba-gold/80">
                  Prayer (Salah) is one of the Five Pillars of Islam. Here are the essential steps
                  for performing prayer:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-kaaba-gold/70">
                  <li>Perform Wudu (ablution)</li>
                  <li>Face the Qibla (direction of the Kaaba)</li>
                  <li>Make the intention (Niyyah)</li>
                  <li>Say "Allahu Akbar" and begin prayer</li>
                  <li>Recite Surah Al-Fatiha</li>
                  <li>Perform the prescribed movements and recitations</li>
                  <li>Complete with the Tasleem</li>
                </ol>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-black/50 backdrop-blur-sm
                          border border-kaaba-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <Book className="w-6 h-6 text-kaaba-gold" />
                <h3 className="text-xl font-semibold text-kaaba-gold">
                  Wudu Instructions
                </h3>
              </div>
              <div className="prose prose-invert prose-gold">
                <p className="text-kaaba-gold/80">
                  Wudu (ablution) is required before prayer. Follow these steps:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-kaaba-gold/70">
                  <li>Make the intention (Niyyah)</li>
                  <li>Wash hands three times</li>
                  <li>Rinse mouth and nose three times</li>
                  <li>Wash face three times</li>
                  <li>Wash arms to elbows three times</li>
                  <li>Wipe head and ears once</li>
                  <li>Wash feet to ankles three times</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}