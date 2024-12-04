export interface Figure {
  id: string;
  name: string;
  arabicName: string;
  title: string;
  period: string;
  description: string;
  image?: string;
  category: 'prophet' | 'companion' | 'scholar' | 'ruler';
}

export interface FigureCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  count: number;
}