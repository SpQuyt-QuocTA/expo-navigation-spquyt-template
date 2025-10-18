import React from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { BaseButtonProps } from './types';
import BaseText from '@/components/text/BaseText';
import { cn } from '@/utils/cn';

const BaseButton: React.FC<BaseButtonProps> = ({
  title,
  loading = false,
  leftIcon,
  rightIcon,
  disabled = false,
  containerClassName = '',
  textClassName = '',
  loadingColor = '#FFFFFF',
  onPress,
  children,
  ...touchableProps
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      className={cn(
        'h-11 px-6 rounded-lg bg-primary flex-row items-center justify-center',
        isDisabled && 'opacity-50',
        containerClassName
      )}
      disabled={isDisabled}
      onPress={onPress}
      activeOpacity={0.7}
      {...touchableProps}
    >
      {loading ? (
        <ActivityIndicator color={loadingColor} />
      ) : (
        <>
          {leftIcon && <View className="mr-2">{leftIcon}</View>}

          {title && (
            <BaseText
              text={title}
              bold
              className={cn('text-base font-semibold text-white', textClassName)}
            />
          )}

          {children}

          {rightIcon && <View className="ml-2">{rightIcon}</View>}
        </>
      )}
    </TouchableOpacity>
  );
};

export default BaseButton;
