import React from 'react';
import { Book, Heart, Moon, Star, Building2 } from 'lucide-react';

export function FundamentalsPage() {
  const pillars = [
    {
      title: 'Shahada',
      arabicTitle: 'الشهادة',
      description: 'Declaration of faith in Allah and His Messenger',
      icon: <Star className="w-8 h-8" />,
      content: 'The declaration that "There is no god but Allah, and Muhammad is the messenger of Allah" (La ilaha illa Allah, Muhammad rasul Allah).'
    },
    {
      title: 'Salah',
      arabicTitle: 'الصلاة',
      description: 'Five daily prayers',
      icon: <Moon className="w-8 h-8" />,
      content: 'The five daily prayers are Fajr (dawn), Dhuhr (noon), Asr (afternoon), Maghrib (sunset), and Isha (night).'
    },
    {
      title: 'Zakat',
      arabicTitle: 'الزكاة',
      description: 'Obligatory charity',
      icon: <Heart className="w-8 h-8" />,
      content: 'Annual payment of 2.5% of one\'s wealth to those in need.'
    },
    {
      title: 'Sawm',
      arabicTitle: 'الصوم',
      description: 'Fasting during Ramadan',
      icon: <Moon className="w-8 h-8" />,
      content: 'Fasting from dawn to sunset during the month of Ramadan.'
    },
    {
      title: 'Hajj',
      arabicTitle: 'الحج',
      description: 'Pilgrimage to Mecca',
      icon: <Building2 className="w-8 h-8" />,
      content: 'Pilgrimage to Mecca once in a lifetime for those who are able.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-[1px] bg-kaaba-gold mx-auto mb-8" />
          <h1 className="text-4xl sm:text-5xl font-bold text-kaaba-gold mb-4">
            Fundamentals of Islam
          </h1>
          <p className="text-lg text-kaaba-gold/80 max-w-2xl mx-auto">
            Learn about the five pillars that form the foundation of Islamic faith and practice
          </p>
          <div className="w-16 h-[1px] bg-kaaba-gold mx-auto mt-8" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-lg border border-kaaba-gold/20 bg-gradient-card
                       hover:border-kaaba-gold/40 transition-all duration-500
                       backdrop-blur-sm hover:transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-kaaba-gold">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kaaba-gold">
                    {pillar.title}
                  </h3>
                  <p className="text-xl font-amiri text-kaaba-gold/90">
                    {pillar.arabicTitle}
                  </p>
                </div>
              </div>
              <p className="text-kaaba-gold/60 mb-2">
                {pillar.description}
              </p>
              <p className="text-kaaba-gold/80 leading-relaxed">
                {pillar.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg border border-kaaba-gold/20 bg-gradient-card backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <Book className="w-6 h-6 text-kaaba-gold" />
            <h2 className="text-2xl font-bold text-kaaba-gold">
              Additional Resources
            </h2>
          </div>
          <div className="prose prose-invert prose-gold max-w-none">
            <div id="fazilet-embed" className="mt-4">
              <a 
                href="https://fazilet.com.tr/ilmihal/en/" 
                className="text-kaaba-gold hover:text-kaaba-gold/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Complete ILM AL-HÂL Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}