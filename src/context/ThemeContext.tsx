import React, { createContext, useContext, useState, ReactNode } from 'react';
import { vars } from 'nativewind';
import {
  lightColors,
  darkColors,
  lightColorsRgb,
  darkColorsRgb,
  ColorScheme
} from '@/config/colors';

interface ThemeColors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  success: string;
  error: string;
  warning: string;
  inputPlaceholder: string;
  inputError: string;
}

interface ThemeContextType {
  colorScheme: ColorScheme;
  colors: ThemeColors;
  isDark: boolean;
  themeVars: Record<string, string>;
  toggleTheme: () => void;
  setTheme: (scheme: ColorScheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

// Define theme CSS variables using NativeWind's vars() from shared colors
const themes = {
  light: vars({
    '--color-primary': lightColorsRgb.primary,
    '--color-background': lightColorsRgb.background,
    '--color-background-secondary': lightColorsRgb.backgroundSecondary,
    '--color-foreground': lightColorsRgb.foreground,
    '--color-foreground-secondary': lightColorsRgb.foregroundSecondary,
    '--color-border': lightColorsRgb.border,
    '--color-card': lightColorsRgb.card,
    '--color-input': lightColorsRgb.input,
    '--color-input-border': lightColorsRgb.inputBorder,
    '--color-success': lightColorsRgb.success,
    '--color-error': lightColorsRgb.error,
    '--color-warning': lightColorsRgb.warning,
  }),
  dark: vars({
    '--color-primary': darkColorsRgb.primary,
    '--color-background': darkColorsRgb.background,
    '--color-background-secondary': darkColorsRgb.backgroundSecondary,
    '--color-foreground': darkColorsRgb.foreground,
    '--color-foreground-secondary': darkColorsRgb.foregroundSecondary,
    '--color-border': darkColorsRgb.border,
    '--color-card': darkColorsRgb.card,
    '--color-input': darkColorsRgb.input,
    '--color-input-border': darkColorsRgb.inputBorder,
    '--color-success': darkColorsRgb.success,
    '--color-error': darkColorsRgb.error,
    '--color-warning': darkColorsRgb.warning,
  }),
};

// Create color objects for React Navigation theme (hex values)
const themeColors = {
  light: {
    primary: lightColors.primary,
    background: lightColors.background,
    card: lightColors.card,
    text: lightColors.foreground,
    border: lightColors.border,
    notification: lightColors.error,
    success: lightColors.success,
    error: lightColors.error,
    warning: lightColors.warning,
    inputPlaceholder: lightColors.foregroundSecondary,
    inputError: lightColors.inputError,
  },
  dark: {
    primary: darkColors.primary,
    background: darkColors.background,
    card: darkColors.card,
    text: darkColors.foreground,
    border: darkColors.border,
    notification: darkColors.error,
    success: darkColors.success,
    error: darkColors.error,
    warning: darkColors.warning,
    inputPlaceholder: darkColors.foregroundSecondary,
    inputError: darkColors.inputError,
  },
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const currentColors = themeColors[colorScheme];
  const isDark = colorScheme === 'dark';
  const currentThemeVars = themes[colorScheme];

  const toggleTheme = () => {
    setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (scheme: ColorScheme) => {
    setColorScheme(scheme);
  };

  const value: ThemeContextType = {
    colorScheme,
    colors: currentColors,
    isDark,
    themeVars: currentThemeVars,
    toggleTheme,
    setTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

