import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import BaseText from '@/components/text/BaseText';

interface ThemeToggleProps {
  containerClassName?: string;
  textClassName?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  containerClassName = '',
  textClassName = '',
}) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      className={`px-4 py-2 rounded-lg border bg-background-secondary border-border ${containerClassName}`.trim()}
      activeOpacity={0.7}
    >
      <BaseText
        i18nKey={isDark ? 'theme.dark' : 'theme.light'}
        bold
        className={textClassName}
      />
    </TouchableOpacity>
  );
};

export default ThemeToggle;

