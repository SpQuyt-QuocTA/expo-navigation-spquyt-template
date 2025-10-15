import { useTheme } from '@/context/ThemeContext';

// Infer ThemeColors type from the theme context
type ThemeColors = ReturnType<typeof useTheme>['colors'];

/**
 * Hook to get a specific color from the current theme
 * @param colorKey - Key from ThemeColors
 * @returns Hex color string
 */
export const useThemeColor = (colorKey: keyof ThemeColors): string => {
  const { colors } = useTheme();
  return colors[colorKey];
};

/**
 * Hook to get multiple colors from the current theme
 * @param colorKeys - Array of keys from ThemeColors
 * @returns Object with color values
 */
export const useThemeColors = <T extends keyof ThemeColors>(
  ...colorKeys: T[]
): Record<T, string> => {
  const { colors } = useTheme();
  return colorKeys.reduce((acc, key) => {
    acc[key] = colors[key];
    return acc;
  }, {} as Record<T, string>);
};

