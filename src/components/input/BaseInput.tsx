import React, { forwardRef } from 'react';
import { TextInput, View } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BaseInputProps } from './types';
import BaseText from '@/components/text/BaseText';
import { cn } from '@/utils/cn';

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

    return (
      <View className={cn(containerClassName)}>
        {label && (
          <BaseText variant="label" color="foreground-secondary" className={cn('mb-1.5', labelClassName)}>
            {label}
            {required && <BaseText text=" *" color="error" />}
          </BaseText>
        )}

        <View className="flex-row items-center">
          {leftIcon && <View className="absolute left-3 z-10">{leftIcon}</View>}

          <TextInput
            ref={ref}
            className={cn(
              'h-11 px-2 rounded-lg border text-base leading-tight',
              error
                ? 'border-error bg-red-50'
                : editable
                  ? 'border-input-border bg-input text-foreground'
                  : 'border-input-border bg-background-secondary text-foreground',
              inputClassName
            )}
            style={[leftIcon ? { paddingLeft: 40 } : rightIcon ? { paddingRight: 40 } : undefined, { width: '100%' }]}
            editable={editable}
            placeholderTextColor={placeholderColor}
            {...textInputProps}
          />

          {rightIcon && <View className="absolute right-3 z-10">{rightIcon}</View>}
        </View>

        {error && <BaseText text={error} variant="caption" color="error" className={cn('mt-1', errorClassName)} />}

        {helperText && !error && (
          <BaseText text={helperText} variant="caption" color="foreground-secondary" className={cn('mt-1', helperClassName)} />
        )}
      </View>
    );
  },
);

BaseInput.displayName = 'BaseInput';

export default BaseInput;
