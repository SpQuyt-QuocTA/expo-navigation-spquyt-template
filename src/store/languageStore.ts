import { create } from 'zustand';
import i18n, { LanguageCode } from '@/i18n';

interface ILanguageState {
  currentLanguage: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
}

export const languageStore = create<ILanguageState>((set) => ({
  currentLanguage: (i18n.language as LanguageCode) || 'en',
  setLanguage: (language: LanguageCode) => {
    i18n.changeLanguage(language);
    set({ currentLanguage: language });
  },
}));

