/**
 * Size Configuration - Single Source of Truth
 * Define sizes once and use them across all components
 * Based on NativeWind v4 where 1rem = 14px (React Native default)
 * https://www.nativewind.dev/v4/core-concepts/rem-units
 */

// Typography sizes (in pixels)
// NativeWind v4: 1rem = 14px (React Native's default Text size)
export const fontSize = {
  xs: 11,    // 0.75rem = 10.5px → rounded to 11px
  sm: 12,    // 0.875rem = 12.25px → rounded to 12px
  base: 14,  // 1rem = 14px (NativeWind v4 default)
  lg: 16,    // 1.125rem = 15.75px → rounded to 16px
  xl: 18,    // 1.25rem = 17.5px → rounded to 18px
  '2xl': 21, // 1.5rem = 21px
  '3xl': 26, // 1.875rem = 26.25px → rounded to 26px
  '4xl': 32, // 2.25rem = 31.5px → rounded to 32px
  '5xl': 42, // 3rem = 42px
  '6xl': 53, // 3.75rem = 52.5px → rounded to 53px
} as const;

// Line heights (following Tailwind CSS scale)
export const lineHeight = {
  // Relative values (multipliers)
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
  // Absolute values (in pixels, based on 1rem = 14px)
  3: 11,   // 0.75rem = 10.5px → 11px
  4: 14,   // 1rem = 14px
  5: 18,   // 1.25rem = 17.5px → 18px
  6: 21,   // 1.5rem = 21px
  7: 25,   // 1.75rem = 24.5px → 25px
  8: 28,   // 2rem = 28px
  9: 32,   // 2.25rem = 31.5px → 32px
  10: 35,  // 2.5rem = 35px
} as const;

// Spacing (following Tailwind CSS scale with 1rem = 14px)
export const spacing = {
  0: 0,      // 0
  0.5: 2,    // 0.125rem = 1.75px → 2px
  1: 4,      // 0.25rem = 3.5px → 4px
  1.5: 5,    // 0.375rem = 5.25px → 5px
  2: 7,      // 0.5rem = 7px
  2.5: 9,    // 0.625rem = 8.75px → 9px
  3: 11,     // 0.75rem = 10.5px → 11px
  3.5: 12,   // 0.875rem = 12.25px → 12px
  4: 14,     // 1rem = 14px
  5: 18,     // 1.25rem = 17.5px → 18px
  6: 21,     // 1.5rem = 21px
  7: 25,     // 1.75rem = 24.5px → 25px
  8: 28,     // 2rem = 28px
  9: 32,     // 2.25rem = 31.5px → 32px
  10: 35,    // 2.5rem = 35px
  11: 39,    // 2.75rem = 38.5px → 39px
  12: 42,    // 3rem = 42px
  13: 46,    // 3.25rem = 45.5px → 46px (custom for large button)
  14: 49,    // 3.5rem = 49px
  16: 56,    // 4rem = 56px
  20: 70,    // 5rem = 70px
  24: 84,    // 6rem = 84px
  28: 98,    // 7rem = 98px
  32: 112,   // 8rem = 112px
  36: 126,   // 9rem = 126px
  40: 140,   // 10rem = 140px
  44: 154,   // 11rem = 154px
  48: 168,   // 12rem = 168px
  52: 182,   // 13rem = 182px
  56: 196,   // 14rem = 196px
  60: 210,   // 15rem = 210px
  64: 224,   // 16rem = 224px
  72: 252,   // 18rem = 252px
  80: 280,   // 20rem = 280px
  96: 336,   // 24rem = 336px
} as const;

// Border radius (following Tailwind CSS scale with 1rem = 14px)
export const borderRadius = {
  none: 0,       // rounded-none
  sm: 2,         // rounded-sm: 0.125rem = 1.75px → 2px
  DEFAULT: 4,    // rounded: 0.25rem = 3.5px → 4px
  md: 5,         // rounded-md: 0.375rem = 5.25px → 5px
  lg: 7,         // rounded-lg: 0.5rem = 7px
  xl: 11,        // rounded-xl: 0.75rem = 10.5px → 11px
  '2xl': 14,     // rounded-2xl: 1rem = 14px
  '3xl': 21,     // rounded-3xl: 1.5rem = 21px
  full: 9999,    // rounded-full
} as const;

// Input/Form Component Sizes
// Based on actual NativeWind v4 Tailwind class computations (1rem = 14px)
export const input = {
  height: spacing[11],              // h-11: 2.75rem = 39px
  fontSize: fontSize.base,          // text-base: 1rem = 14px
  paddingHorizontal: spacing[2],    // px-2: 0.5rem = 7px
  paddingVertical: spacing[3],      // py-3: 0.75rem = 11px
  borderRadius: borderRadius.lg,    // rounded-lg: 0.5rem = 7px
  borderWidth: 1,
  iconPadding: spacing[10],         // 2.5rem = 35px (when icon present)
  iconSize: spacing[5],             // 1.25rem = 18px
} as const;

// Dropdown Component Sizes (matches input for consistency)
export const dropdown = {
  height: input.height,                       // 39px (h-11)
  fontSize: input.fontSize,                   // 14px (text-base)
  paddingHorizontal: input.paddingHorizontal, // 14px (px-4)
  paddingVertical: input.paddingVertical,     // 11px (py-3)
  borderRadius: input.borderRadius,           // 7px (rounded-lg)
  borderWidth: input.borderWidth,             // 1px
  iconPadding: input.iconPadding,             // 35px
  iconSize: input.iconSize,                   // 18px
  maxHeight: 300,                             // Max dropdown list height
  itemPaddingHorizontal: spacing[1],          // 14px (px-4)
  itemPaddingVertical: spacing[0],            // 11px (py-3)
  searchInputHeight: spacing[10],             // 35px (h-10: 2.5rem)
} as const;

// Button Sizes
// Based on actual NativeWind v4 Tailwind class computations (1rem = 14px)
export const button = {
  height: {
    sm: spacing[8],   // h-8: 2rem = 28px
    base: spacing[11], // h-11: 2.75rem = 39px
    lg: spacing[13],   // custom h-13: 3.25rem × 14 = 45.5px → 46px (need to calculate)
  },
  fontSize: {
    sm: fontSize.sm,   // text-sm: 0.875rem = 12px
    base: fontSize.base, // text-base: 1rem = 14px
    lg: fontSize.lg,   // text-lg: 1.125rem = 16px
  },
  paddingHorizontal: {
    sm: spacing[3],  // px-3: 0.75rem = 11px
    base: spacing[6], // px-6: 1.5rem = 21px
    lg: spacing[8],  // px-8: 2rem = 28px
  },
  borderRadius: borderRadius.lg, // rounded-lg: 0.5rem = 7px
} as const;

// Icon Sizes
// Common icon sizes (not strictly tied to rem units)
export const icon = {
  xs: 14,    // Small icons
  sm: 18,    // Default small
  base: 21,  // Standard size
  lg: 28,    // Large icons
  xl: 35,    // Extra large
} as const;

// Container Sizes
// Based on NativeWind v4 Tailwind spacing
export const container = {
  padding: spacing[6], // p-6: 1.5rem = 21px
  gap: spacing[4],     // gap-4: 1rem = 14px
} as const;

// Export types for TypeScript
export type FontSize = keyof typeof fontSize;
export type Spacing = keyof typeof spacing;
export type BorderRadius = keyof typeof borderRadius;
export type IconSize = keyof typeof icon;

