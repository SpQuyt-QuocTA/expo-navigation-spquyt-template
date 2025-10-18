import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './locales/en.json';
import vi from './locales/vi.json';

// Available languages
export const LANGUAGES = {
  en: { name: 'English', nativeName: 'English' },
  vi: { name: 'Vietnamese', nativeName: 'Tiếng Việt' },
} as const;

export type LanguageCode = keyof typeof LANGUAGES;

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  lng: Localization.getLocales()[0]?.languageCode || 'en', // Device language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
  compatibilityJSON: 'v4', // For Hermes compatibility
});

export default i18n;

