import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { figures } from '../../data/figures';
import { FigureCard } from '../../components/figures/FigureCard';

export function ProphetView() {
  const { id } = useParams<{ id: string }>();
  const prophet = figures.find(f => f.id === id && f.category === 'prophet');

  if (!prophet) {
    return (
      <div className="min-h-screen pt-24 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-kaaba-gold">
            Prophet not found
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/figures"
            className="inline-flex items-center text-kaaba-gold hover:text-kaaba-gold/80 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Figures
          </Link>
        </div>

        <FigureCard figure={prophet} />
      </div>
    </div>
  );
}