import { useState } from 'react';
import { IItem } from '../interfaces';

export const useItems = () => {
  // TODO: Replace with actual API call
  const [items] = useState<IItem[]>([
    {
      id: '1',
      name: 'React Native',
      description: 'Build native mobile apps using React',
      category: 'Framework',
    },
    {
      id: '2',
      name: 'Expo',
      description: 'Platform for making universal native apps',
      category: 'Platform',
    },
    {
      id: '3',
      name: 'TypeScript',
      description: 'Typed superset of JavaScript',
      category: 'Language',
    },
    {
      id: '4',
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework',
      category: 'Styling',
    },
    {
      id: '5',
      name: 'Zustand',
      description: 'Small, fast state management',
      category: 'State Management',
    },
  ]);

  const [isLoading] = useState(false);

  return { items, isLoading };
};

