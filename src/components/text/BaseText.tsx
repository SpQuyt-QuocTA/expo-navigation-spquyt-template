import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { BaseTextProps, TextVariant, TextColor } from './types';
import { cn } from '@/utils/cn';

/**
 * BaseText Component
 * 
 * Comprehensive text component with i18n support and theming
 * 
 * @example
 * // With i18n key
 * <BaseText i18nKey="auth.login" variant="h1" />
 * 
 * // With i18n interpolation
 * <BaseText i18nKey="common.greeting" i18nValues={{ name: 'John' }} />
 * 
 * // With direct text
 * <BaseText text="Hello World" variant="body" color="primary" />
 * 
 * // With children
 * <BaseText variant="h2" bold>Custom Content</BaseText>
 * 
 * // Custom styling
 * <BaseText i18nKey="auth.email" className="text-2xl text-red-500" />
 */
const BaseText: React.FC<BaseTextProps> = ({
  i18nKey,
  i18nValues,
  text,
  variant = 'body',
  color = 'foreground',
  bold = false,
  italic = false,
  underline = false,
  align = 'left',
  className = '',
  children,
  testID,
  accessibilityLabel,
  accessibilityHint,
  ...textProps
}) => {
  const { t } = useTranslation();

  const content = i18nKey ? t(i18nKey, i18nValues) : text ?? children;

  return (
    <Text
      className={cn(
        getVariantStyles(variant),
        getColorStyles(color),
        bold && 'font-bold',
        italic && 'italic',
        underline && 'underline',
        getAlignStyles(align),
        className
      )}
      testID={testID}
      accessibilityLabel={accessibilityLabel || (typeof content === 'string' ? content : undefined)}
      accessibilityHint={accessibilityHint}
      {...textProps}
    >
      {content}
    </Text>
  );
};

// Variant style mappings
function getVariantStyles(variant: TextVariant): string {
  const variants: Record<TextVariant, string> = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-semibold',
    body: 'text-base',
    bodyLarge: 'text-lg',
    bodySmall: 'text-sm',
    caption: 'text-xs',
    label: 'text-sm font-medium',
    button: 'text-base font-semibold',
  };
  return variants[variant] || variants.body;
}

// Color style mappings
function getColorStyles(color: TextColor): string {
  const colors: Record<TextColor, string> = {
    primary: 'text-primary',
    foreground: 'text-foreground',
    'foreground-secondary': 'text-foreground-secondary',
    error: 'text-error',
    success: 'text-success',
    warning: 'text-warning',
  };
  return colors[color] || colors.foreground;
}

// Alignment style mappings
function getAlignStyles(align: 'left' | 'center' | 'right' | 'justify'): string {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };
  return alignments[align];
}

export default BaseText;

