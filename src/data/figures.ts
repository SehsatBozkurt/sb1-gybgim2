import { Figure, FigureCategory } from '../types/figures';

export const categories: FigureCategory[] = [
  {
    id: 'prophets',
    title: 'Prophets',
    description: 'The noble messengers of Allah, who guided humanity throughout history',
    image: 'https://images.unsplash.com/photo-1564769625392-651b89c75a77?auto=format&fit=crop&q=80&w=1200',
    count: 25
  },
  {
    id: 'companions',
    title: 'Companions',
    description: 'The blessed companions (Sahaba) of Prophet Muhammad ﷺ',
    image: 'https://images.unsplash.com/photo-1591456983933-0c126b90ffd2?auto=format&fit=crop&q=80&w=1200',
    count: 40
  },
  {
    id: 'scholars',
    title: 'Scholars',
    description: 'The great Islamic scholars and Imams who preserved and explained the religion',
    image: 'https://images.unsplash.com/photo-1583482183021-daa0eda21b62?auto=format&fit=crop&q=80&w=1200',
    count: 30
  },
  {
    id: 'rulers',
    title: 'Rulers',
    description: 'The notable rulers of Islamic empires throughout history',
    image: 'https://images.unsplash.com/photo-1584286595398-a59511e0649f?auto=format&fit=crop&q=80&w=1200',
    count: 20
  }
];

export const figures: Figure[] = [
  {
    id: 'muhammad',
    name: 'Muhammad',
    arabicName: 'محمد',
    title: 'The Final Prophet ﷺ',
    period: '570-632 CE',
    description: 'The final messenger of Allah, who received and transmitted the Holy Quran.',
    category: 'prophet',
    image: 'https://images.unsplash.com/photo-1564769625392-651b89c75a77?auto=format&fit=crop&q=80&w=1200'
  },
  // More figures will be added here
];