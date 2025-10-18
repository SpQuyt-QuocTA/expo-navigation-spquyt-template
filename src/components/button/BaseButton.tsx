import React from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { BaseButtonProps } from './types';
import BaseText from '@/components/text/BaseText';

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

  // Apply default container styles only if not overridden
  const hasCustomContainer = containerClassName.length > 0;
  const defaultContainerStyles = hasCustomContainer
    ? 'flex-row items-center justify-center'
    : 'h-11 px-6 rounded-lg bg-primary flex-row items-center justify-center';
  const disabledStyles = isDisabled ? 'opacity-50' : '';
  const finalContainerStyles = `${defaultContainerStyles} ${disabledStyles} ${containerClassName}`.trim();

  // Apply default text styles only if not overridden
  const hasCustomText = textClassName.length > 0;
  const defaultTextStyles = hasCustomText ? '' : 'text-base font-semibold text-white';
  const finalTextStyles = `${defaultTextStyles} ${textClassName}`.trim();

  return (
    <TouchableOpacity
      className={finalContainerStyles}
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

          {title && <BaseText text={title} bold className={textClassName} />}

          {children}

          {rightIcon && <View className="ml-2">{rightIcon}</View>}
        </>
      )}
    </TouchableOpacity>
  );
};

export default BaseButton;
