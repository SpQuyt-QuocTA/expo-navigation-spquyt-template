const { lightColorsRgb } = require('./src/config/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './src/**/*.{js,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Use CSS variables for dynamic theming
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        'background-secondary': 'rgb(var(--color-background-secondary) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        'foreground-secondary': 'rgb(var(--color-foreground-secondary) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        input: 'rgb(var(--color-input) / <alpha-value>)',
        'input-border': 'rgb(var(--color-input-border) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
      },
    },
  },
  plugins: [
    // Set default light theme values from shared colors config
    ({ addBase }) =>
      addBase({
        ':root': {
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
        },
      }),
  ],
};
