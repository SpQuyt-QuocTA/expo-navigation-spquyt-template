import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BaseHeaderProps } from './types';
import { ArrowLeft } from '@/components/icons';
import BaseText from '@/components/text/BaseText';
import { cn } from '@/utils/cn';

const BaseHeader: React.FC<BaseHeaderProps> = ({
  title,
  leftElement,
  rightElement,
  useDefaultBack = false,
  onBackPress,
  showBorder = false,
  containerClassName = '',
  titleClassName = '',
  leftClassName = '',
  rightClassName = '',
  ...viewProps
}) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  const renderLeftElement = () => {
    if (leftElement) return leftElement;
    if (useDefaultBack && canGoBack) {
      return (
        <TouchableOpacity onPress={onBackPress || (() => navigation.goBack())}>
          <ArrowLeft width={24} height={24} fill="#111827" />
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View
      className={cn(
        'h-14 px-4 flex-row items-center justify-between bg-card',
        showBorder && 'border-b border-border',
        containerClassName
      )}
      {...viewProps}
    >
      <View className={cn('flex-1 flex-row items-center', leftClassName)}>
        {renderLeftElement()}
      </View>

      {title && (
        <View className="flex-1 items-center">
          <BaseText
            text={title}
            variant="bodyLarge"
            bold
            numberOfLines={1}
            className={titleClassName}
          />
        </View>
      )}

      <View className={cn('flex-1 flex-row items-center justify-end', rightClassName)}>
        {rightElement}
      </View>
    </View>
  );
};

export default BaseHeader;

