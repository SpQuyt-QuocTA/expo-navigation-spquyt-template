import React, { forwardRef } from 'react';
import { TextInput, View } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BaseInputProps } from './types';
import BaseText from '@/components/text/BaseText';

const BaseInput = forwardRef<TextInput, BaseInputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      required = false,
      containerClassName = '',
      labelClassName = '',
      inputClassName = '',
      errorClassName = '',
      helperClassName = '',
      editable = true,
      ...textInputProps
    },
    ref,
  ) => {
    const placeholderColor = useThemeColor('inputPlaceholder');

    const defaultInputStyles = 'h-11 px-4 rounded-lg border text-base';
    const stateStyles = error
      ? 'border-error bg-red-50'
      : editable
        ? 'border-input-border bg-input text-foreground'
        : 'border-input-border bg-background-secondary text-foreground';
    const finalInputStyles = `${defaultInputStyles} ${stateStyles} ${inputClassName}`.trim();

    return (
      <View className={`${containerClassName}`.trim()}>
        {/* Label */}
        {label && (
          <BaseText variant="label" color="foreground-secondary" className={`mb-1.5 ${labelClassName}`.trim()}>
            {label}
            {required && <BaseText text=" *" color="error" />}
          </BaseText>
        )}

        {/* Input Container */}
        <View className="flex-row items-center">
          {/* Left Icon */}
          {leftIcon && <View className="absolute left-3 z-10">{leftIcon}</View>}

          {/* Input */}
          <TextInput
            ref={ref}
            className={finalInputStyles}
            style={[leftIcon ? { paddingLeft: 40 } : rightIcon ? { paddingRight: 40 } : undefined, { width: '100%' }]}
            editable={editable}
            placeholderTextColor={placeholderColor}
            {...textInputProps}
          />

          {/* Right Icon */}
          {rightIcon && <View className="absolute right-3 z-10">{rightIcon}</View>}
        </View>

        {/* Error Message */}
        {error && <BaseText text={error} variant="caption" color="error" className={`mt-1 ${errorClassName}`.trim()} />}

        {/* Helper Text */}
        {helperText && !error && (
          <BaseText text={helperText} variant="caption" color="foreground-secondary" className={`mt-1 ${helperClassName}`.trim()} />
        )}
      </View>
    );
  },
);

BaseInput.displayName = 'BaseInput';

export default BaseInput;
