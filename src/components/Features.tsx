import React from 'react';
import { Book, Heart, Moon, Compass } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Sacred Direction',
      description: 'Discover the spiritual significance of the Qibla and its role in Islamic worship',
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: 'Divine Knowledge',
      description: 'Explore the profound teachings and wisdom of Islamic architecture',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Spiritual Unity',
      description: 'Connect with the global Muslim community through shared sacred spaces',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#C5A572]/5 via-transparent to-transparent"></div>
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C5A572] mb-4">
            Sacred Wisdom
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-lg border border-[#C5A572]/20 bg-gradient-card
                        backdrop-blur-sm transition-all duration-500 hover:border-[#C5A572]/40 
                        hover:transform hover:-translate-y-2 hover-gradient"
            >
              <div className="relative">
                <div className="text-[#C5A572] mb-6 flex justify-center transform transition-transform 
                              duration-500 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-[#C5A572] text-xl font-semibold mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}