import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeaderProps } from './types';
import { ArrowLeft } from '@/components/icons';

const Header: React.FC<HeaderProps> = ({
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

  const defaultContainerStyles = 'h-14 px-4 flex-row items-center justify-between bg-white';
  const borderStyles = showBorder ? 'border-b border-gray-200' : '';
  const finalContainerStyles = `${defaultContainerStyles} ${borderStyles} ${containerClassName}`.trim();

  const defaultTitleStyles = 'text-lg font-semibold text-gray-900';
  const finalTitleStyles = `${defaultTitleStyles} ${titleClassName}`.trim();

  // Render default back button if needed
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
    <View className={finalContainerStyles} {...viewProps}>
      {/* Left Element */}
      <View className={`flex-1 flex-row items-center ${leftClassName}`.trim()}>
        {renderLeftElement()}
      </View>

      {/* Title - Centered */}
      {title && (
        <View className="flex-1 items-center">
          <Text className={finalTitleStyles} numberOfLines={1}>
            {title}
          </Text>
        </View>
      )}

      {/* Right Element */}
      <View className={`flex-1 flex-row items-center justify-end ${rightClassName}`.trim()}>
        {rightElement}
      </View>
    </View>
  );
};

export default Header;

