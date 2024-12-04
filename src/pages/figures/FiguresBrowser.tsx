import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/figures';

export function FiguresBrowser() {
  return (
    <div className="min-h-screen pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-[1px] bg-kaaba-gold mx-auto mb-8" />
          <h1 className="text-4xl sm:text-5xl font-bold text-kaaba-gold mb-4">
            Important Figures in Islam
          </h1>
          <p className="text-lg text-kaaba-gold/80 max-w-2xl mx-auto">
            Explore the lives of prophets, companions, scholars, and rulers who shaped Islamic history
          </p>
          <div className="w-16 h-[1px] bg-kaaba-gold mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/figures/${category.id}`}
              className="group relative overflow-hidden rounded-lg border border-kaaba-gold/20 
                       hover:border-kaaba-gold/40 transition-all duration-500
                       bg-gradient-card backdrop-blur-sm hover:transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-64 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              </div>
              <div className="p-6 relative">
                <h3 className="text-2xl font-bold text-kaaba-gold mb-2">
                  {category.title}
                </h3>
                <p className="text-kaaba-gold/70 mb-4">
                  {category.description}
                </p>
                <span className="text-sm text-kaaba-gold/60">
                  {category.count} figures
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}