import { TextProps as RNTextProps } from 'react-native';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'bodyLarge'
  | 'bodySmall'
  | 'caption'
  | 'label'
  | 'button';

export type TextColor =
  | 'primary'
  | 'foreground'
  | 'foreground-secondary'
  | 'error'
  | 'success'
  | 'warning';

export interface BaseTextOwnProps {
  // i18n props
  /** Translation key from i18n files */
  i18nKey?: string;
  /** Values for translation interpolation */
  i18nValues?: Record<string, string | number>;
  /** Direct text content (used if i18nKey is not provided) */
  text?: string;

  // Style variants
  /** Predefined text variant */
  variant?: TextVariant;
  /** Text color from theme */
  color?: TextColor;
  /** Bold text */
  bold?: boolean;
  /** Italic text */
  italic?: boolean;
  /** Underline text */
  underline?: boolean;
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';

  // Custom styling
  /** Custom container className (NativeWind) */
  className?: string;

  // Accessibility
  /** Test ID for testing */
  testID?: string;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Accessibility hint */
  accessibilityHint?: string;
}

export interface BaseTextProps extends Omit<RNTextProps, 'className'>, BaseTextOwnProps { }

