/**
 * Color Configuration - Single Source of Truth
 * Define colors once and use them across:
 * - Tailwind config (as RGB triplets)
 * - NativeWind vars() (as RGB triplets)
 * - React Navigation theme (as hex)
 */

// Helper to convert hex to RGB triplet string
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) throw new Error(`Invalid hex color: ${hex}`);
  return `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`;
}

// Define colors in hex format (easiest to read and maintain)
export const lightColors = {
  primary: '#3B82F6',
  background: '#FFFFFF',
  backgroundSecondary: '#F9FAFB',
  foreground: '#111827',
  foregroundSecondary: '#6B7280',
  border: '#E5E7EB',
  card: '#FFFFFF',
  input: '#FFFFFF',
  inputBorder: '#D1D5DB',
  inputError: '#FEF2F2',
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
};

export const darkColors = {
  primary: '#60A5FA',
  background: '#111827',
  backgroundSecondary: '#1F2937',
  foreground: '#F9FAFB',
  foregroundSecondary: '#D1D5DB',
  border: '#374151',
  card: '#1F2937',
  input: '#1F2937',
  inputBorder: '#4B5563',
  inputError: '#7F1D1D',
  success: '#34D399',
  error: '#F87171',
  warning: '#FBBF24',
};

// Export as RGB triplets for Tailwind/NativeWind
export const lightColorsRgb = {
  primary: hexToRgb(lightColors.primary),
  background: hexToRgb(lightColors.background),
  backgroundSecondary: hexToRgb(lightColors.backgroundSecondary),
  foreground: hexToRgb(lightColors.foreground),
  foregroundSecondary: hexToRgb(lightColors.foregroundSecondary),
  border: hexToRgb(lightColors.border),
  card: hexToRgb(lightColors.card),
  input: hexToRgb(lightColors.input),
  inputBorder: hexToRgb(lightColors.inputBorder),
  inputError: hexToRgb(lightColors.inputError),
  success: hexToRgb(lightColors.success),
  error: hexToRgb(lightColors.error),
  warning: hexToRgb(lightColors.warning),
};

export const darkColorsRgb = {
  primary: hexToRgb(darkColors.primary),
  background: hexToRgb(darkColors.background),
  backgroundSecondary: hexToRgb(darkColors.backgroundSecondary),
  foreground: hexToRgb(darkColors.foreground),
  foregroundSecondary: hexToRgb(darkColors.foregroundSecondary),
  border: hexToRgb(darkColors.border),
  card: hexToRgb(darkColors.card),
  input: hexToRgb(darkColors.input),
  inputBorder: hexToRgb(darkColors.inputBorder),
  inputError: hexToRgb(darkColors.inputError),
  success: hexToRgb(darkColors.success),
  error: hexToRgb(darkColors.error),
  warning: hexToRgb(darkColors.warning),
};

// Type for color scheme
export type ColorScheme = 'light' | 'dark';

