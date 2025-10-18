import React from 'react';
import { TouchableOpacity } from 'react-native';
import { languageStore } from '@/store/languageStore';
import { LANGUAGES, LanguageCode } from '@/i18n';
import { LanguageSelectorProps } from './types';
import BaseText from '@/components/text/BaseText';
import { cn } from '@/utils/cn';

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  containerClassName = '',
  textClassName = '',
}) => {
  const { currentLanguage, setLanguage } = languageStore();

  const toggleLanguage = () => {
    const languages = Object.keys(LANGUAGES) as LanguageCode[];
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const displayName = LANGUAGES[currentLanguage].nativeName;

  return (
    <TouchableOpacity
      onPress={toggleLanguage}
      className={cn(
        'rounded-lg border border-border bg-background-secondary px-4 py-2',
        containerClassName
      )}
      activeOpacity={0.7}
    >
      <BaseText text={`🌐 ${displayName}`} bold className={textClassName} />
    </TouchableOpacity>
  );
};

export default LanguageSelector;

