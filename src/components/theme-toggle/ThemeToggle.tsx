import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context/ThemeContext';

interface ThemeToggleProps {
  containerClassName?: string;
  textClassName?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  containerClassName = '',
  textClassName = '',
}) => {
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      className={`px-4 py-2 rounded-lg border bg-background-secondary border-border ${containerClassName}`.trim()}
      activeOpacity={0.7}
    >
      <Text className={`font-semibold text-foreground ${textClassName}`.trim()}>
        {isDark ? t('theme.dark') : t('theme.light')}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemeToggle;

