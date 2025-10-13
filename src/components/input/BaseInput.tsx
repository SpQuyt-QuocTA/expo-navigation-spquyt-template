import React, { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { BaseInputProps } from './types';

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
    const defaultInputStyles = 'h-11 px-4 rounded-lg border border-gray-300 bg-white text-base';
    const errorStyles = error ? 'border-red-500 bg-red-50' : '';
    const disabledStyles = !editable ? 'bg-gray-100 text-gray-400' : '';
    const finalInputStyles = `${defaultInputStyles} ${errorStyles} ${disabledStyles} ${inputClassName}`.trim();

    return (
      <View className={`${containerClassName}`.trim()}>
        {/* Label */}
        {label && (
          <Text className={`mb-1.5 text-sm font-medium text-gray-700 ${labelClassName}`.trim()}>
            {label}
            {required && <Text className="text-red-500"> *</Text>}
          </Text>
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
            placeholderTextColor="#9CA3AF"
            {...textInputProps}
          />

          {/* Right Icon */}
          {rightIcon && <View className="absolute right-3 z-10">{rightIcon}</View>}
        </View>

        {/* Error Message */}
        {error && (
          <Text className={`mt-1 text-xs text-red-500 ${errorClassName}`.trim()}>{error}</Text>
        )}

        {/* Helper Text */}
        {helperText && !error && (
          <Text className={`mt-1 text-xs text-gray-500 ${helperClassName}`.trim()}>
            {helperText}
          </Text>
        )}
      </View>
    );
  },
);

BaseInput.displayName = 'BaseInput';

export default BaseInput;
