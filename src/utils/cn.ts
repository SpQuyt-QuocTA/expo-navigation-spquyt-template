import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with conflict resolution
 * Later classes override earlier ones (like spreading objects)
 * 
 * @example
 * cn('text-red-500', 'text-blue-500') // 'text-blue-500' ✅
 * cn('text-base font-bold', 'text-xl') // 'text-xl font-bold' ✅
 * cn('px-4 py-2', 'p-6') // 'p-6' ✅
 */
export function cn(...classNames: (string | undefined | null | false)[]): string {
  return twMerge(classNames.filter(Boolean).join(' '));
}

