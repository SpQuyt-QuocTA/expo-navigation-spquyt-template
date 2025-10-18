import { useState, useEffect } from 'react';
import { IItemDetail } from '../interfaces';

export const useItemDetails = (itemId: string) => {
  const [item, setItem] = useState<IItemDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchItemDetails = () => {
      setIsLoading(true);

      const mockData: Record<string, IItemDetail> = {
        '1': {
          id: '1',
          name: 'React Native',
          description: 'Build native mobile apps using React',
          category: 'Framework',
          details:
            'React Native lets you create truly native apps and does not compromise on user experience. It provides a core set of platform agnostic native components.',
          features: [
            'Cross-platform development',
            'Hot reloading',
            'Native performance',
            'Large community',
            'Reusable components',
          ],
        },
        '2': {
          id: '2',
          name: 'Expo',
          description: 'Platform for making universal native apps',
          category: 'Platform',
          details:
            'Expo is an open-source platform for making universal native apps that run on Android, iOS, and the web. It includes a universal runtime and libraries.',
          features: [
            'Managed workflow',
            'Over-the-air updates',
            'Build services',
            'Development tools',
            'Native modules',
          ],
        },
        '3': {
          id: '3',
          name: 'TypeScript',
          description: 'Typed superset of JavaScript',
          category: 'Language',
          details:
            'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
          features: [
            'Static typing',
            'Enhanced IDE support',
            'Advanced refactoring',
            'Code navigation',
            'Interface definitions',
          ],
        },
        '4': {
          id: '4',
          name: 'Tailwind CSS',
          description: 'Utility-first CSS framework',
          category: 'Styling',
          details:
            'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs.',
          features: [
            'Utility-first approach',
            'Responsive design',
            'Dark mode support',
            'Customizable',
            'JIT compiler',
          ],
        },
        '5': {
          id: '5',
          name: 'Zustand',
          description: 'Small, fast state management',
          category: 'State Management',
          details:
            'Zustand is a small, fast and scalable bearbones state-management solution using simplified flux principles.',
          features: [
            'Simple API',
            'No providers needed',
            'TypeScript support',
            'Minimal boilerplate',
            'React hooks based',
          ],
        },
      };

      setTimeout(() => {
        setItem(mockData[itemId] || null);
        setIsLoading(false);
      }, 500);
    };

    fetchItemDetails();
  }, [itemId]);

  return { item, isLoading };
};

