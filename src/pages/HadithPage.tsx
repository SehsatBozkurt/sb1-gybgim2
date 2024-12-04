import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { HadithCollection } from './HadithCollection';

export function HadithPage() {
  const collections = [
    {
      id: 'bukhari',
      title: 'Sahih al-Bukhari',
      description: 'The most authentic collection of Hadith compiled by Imam Muhammad al-Bukhari',
      count: '7,563 hadiths',
      image: 'https://images.unsplash.com/photo-1584286595398-a59511e0649f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'muslim',
      title: 'Sahih Muslim',
      description: 'The second most authentic collection of Hadith compiled by Imam Muslim ibn al-Hajjaj',
      count: '7,500 hadiths',
      image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
            <div className="text-center mb-12">
              <div className="w-16 h-[1px] bg-kaaba-gold mx-auto mb-8" />
              <h1 className="text-4xl sm:text-5xl font-bold text-kaaba-gold mb-4">
                Hadith Collections
              </h1>
              <p className="text-lg text-kaaba-gold/80 max-w-2xl mx-auto">
                Explore the authentic collections of Prophetic traditions
              </p>
              <div className="w-16 h-[1px] bg-kaaba-gold mx-auto mt-8" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  to={`/hadith/${collection.id}`}
                  className="group relative overflow-hidden rounded-lg border border-kaaba-gold/20 
                           hover:border-kaaba-gold/40 transition-all duration-500
                           bg-gradient-card backdrop-blur-sm hover:transform hover:-translate-y-1"
                >
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="object-cover w-full h-64 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  </div>
                  <div className="p-6 relative">
                    <h3 className="text-2xl font-bold text-kaaba-gold mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-kaaba-gold/70 mb-4">
                      {collection.description}
                    </p>
                    <span className="text-sm text-kaaba-gold/60">
                      {collection.count}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        }
      />
      <Route path=":collection" element={<HadithCollection />} />
    </Routes>
  );
}