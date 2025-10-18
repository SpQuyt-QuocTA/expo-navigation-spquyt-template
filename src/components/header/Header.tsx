import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeaderProps } from './types';
import { ArrowLeft } from '@/components/icons';
import BaseText from '@/components/text/BaseText';

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

  const borderStyles = showBorder ? 'border-b border-border' : '';
  const finalContainerStyles = `h-14 px-4 flex-row items-center justify-between bg-card ${borderStyles} ${containerClassName}`.trim();
  const finalTitleStyles = `text-lg font-semibold text-foreground ${titleClassName}`.trim();

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
          <BaseText text={title} variant="bodyLarge" bold numberOfLines={1} className={titleClassName} />
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
