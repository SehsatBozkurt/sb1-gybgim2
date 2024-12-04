import React from 'react';
import { Figure } from '../../types/figures';

interface FigureCardProps {
  figure: Figure;
}

export function FigureCard({ figure }: FigureCardProps) {
  return (
    <div className="p-6 border border-kaaba-gold/20 rounded-lg bg-gradient-card
                    hover:border-kaaba-gold/40 transition-all duration-300
                    backdrop-blur-sm">
      {figure.image && (
        <div className="mb-4 aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden">
          <img
            src={figure.image}
            alt={figure.name}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-kaaba-gold">
          {figure.name}
        </h3>
        {figure.arabicName && (
          <p className="text-xl text-kaaba-gold/90 font-amiri text-right">
            {figure.arabicName}
          </p>
        )}
        <p className="text-sm text-kaaba-gold/60">
          {figure.title} • {figure.period}
        </p>
        <p className="text-kaaba-gold/80">
          {figure.description}
        </p>
      </div>
    </div>
  );
}