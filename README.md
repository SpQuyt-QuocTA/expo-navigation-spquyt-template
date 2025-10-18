# Expo Navigation Template

Multi-environment React Native template with:

- **Expo SDK**: 54.0.0
- **React Native**: 0.81.4
- **React Navigation**: 7.1.6
- **Expo Dev Client** for custom native code
- **NativeWind** (Tailwind CSS) with dark mode
- **TypeScript** support
- **Light/Dark Theme** support

Supports 3 environments: `development`, `staging`, `production`

---

## 🚀 Setup for New Project

### 1. Remove from `.gitignore`

Delete these lines to keep native folders in git:

```
android
ios
```

### 2. Create `.env` Files

Create 3 files with your configuration:

**`.env.development`**

```bash
APP_ENV=development
API_URL=https://api-dev.yourapp.com
APP_NAME=YourApp (Dev)
APP_BUNDLE_ID=com.yourcompany.yourapp.dev
```

**`.env.staging`**

```bash
APP_ENV=staging
API_URL=https://api-staging.yourapp.com
APP_NAME=YourApp (Staging)
APP_BUNDLE_ID=com.yourcompany.yourapp.staging
```

**`.env.production`**

```bash
APP_ENV=production
API_URL=https://api.yourapp.com
APP_NAME=YourApp
APP_BUNDLE_ID=com.yourcompany.yourapp
```

### 3. Generate & Build

```bash
npm run prebuild:dev    # Generate native projects
npm run ios:dev         # Build & run
```

---

## 🔄 Switching Environments

```bash
# 1. Prebuild for target environment
npm run prebuild:staging

# 2. Build & run
npm run ios:staging
```

---

## 📦 Commands

### Daily Development (Fast)

```bash
npm run ios:dev
npm run android:dev
```

### Change Environment (Slow - only when needed)

```bash
npm run prebuild:dev       # Regenerate for dev
npm run prebuild:staging   # Regenerate for staging
npm run prebuild:prod      # Regenerate for production
```

### All Build Commands

```bash
npm run ios:dev / android:dev         # Development
npm run ios:staging / android:staging # Staging
npm run ios:prod / android:prod       # Production
```

---

## 💻 Usage in Code

```typescript
import { ENV, isDevelopment } from '@/config/env';
import { logger } from '@/utils/logger';

// Access environment
console.log(ENV.apiUrl); // Current API URL
console.log(ENV.appEnv); // 'development' | 'staging' | 'production'

// Check environment
if (isDevelopment()) {
  // Dev-only code
}

// Logging (only shows in __DEV__)
logger.info('Info message');
logger.warn('Warning');
logger.error('Error');
```

### Theme System

All colors are centralized in `src/config/colors.ts` - **single source of truth**.

#### 🎨 How to Add/Change Colors

**1. Edit `src/config/colors.ts`** (the ONLY file you need to edit):

```typescript
export const lightColors = {
  primary: '#3B82F6',
  background: '#FFFFFF',
  // ... existing colors
  accent: '#FF6B9D', // ✅ Add new color here
};

export const darkColors = {
  primary: '#60A5FA',
  background: '#111827',
  // ... existing colors
  accent: '#FF8AB8', // ✅ Add dark variant here
};
```

**2. Auto-updates everywhere:**

- ✅ Tailwind classes (`bg-accent`, `text-accent`)
- ✅ React Navigation theme
- ✅ NativeWind CSS variables
- ✅ TypeScript types

**3. Use in your components:**

```tsx
// With Tailwind classes (automatically themed)
<View className="bg-background">
  <Text className="text-primary">Hello</Text>
  <Text className="text-foreground-secondary">Subtitle</Text>
  <Button className="bg-accent" /> {/* Your new color! */}
</View>

// Available semantic colors (all themed automatically):
// - primary, background, background-secondary
// - foreground, foreground-secondary
// - card, input, input-border, border
// - success, error, warning
```

#### 🌓 Using Theme in Code

```tsx
// Theme toggle component
import ThemeToggle from '@/components/theme-toggle/ThemeToggle';
<ThemeToggle />;

// Access theme programmatically
import { useTheme } from '@/context/ThemeContext';
const { colors, isDark, toggleTheme } = useTheme();

// Get specific color value
import { useThemeColor } from '@/hooks/useThemeColor';
const primaryColor = useThemeColor('primary'); // Returns hex value
```

### Internationalization (i18n)

All translations are defined in `src/i18n/locales/*.json` files.

#### 🌐 Supported Languages

- English (`en`)
- Vietnamese (`vi`)

#### 📝 How to Add/Change Translations

**1. Edit translation files** (both languages):

```json
// src/i18n/locales/en.json
{
  "common": {
    "myKey": "My English Text"
  }
}

// src/i18n/locales/vi.json
{
  "common": {
    "myKey": "Văn bản tiếng Việt"
  }
}
```

**2. Use in your components:**

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return <Text>{t('common.myKey')}</Text>;
}
```

#### 🔤 Adding a New Language

**1. Create translation file:**

```bash
# src/i18n/locales/es.json (example for Spanish)
{
  "common": { ... },
  "auth": { ... }
}
```

**2. Update i18n config:**

```typescript
// src/i18n/index.ts
import es from './locales/es.json';

export const LANGUAGES = {
  en: { name: 'English', nativeName: 'English' },
  vi: { name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  es: { name: 'Spanish', nativeName: 'Español' }, // Add here
};

// In init()
resources: {
  en: { translation: en },
  vi: { translation: vi },
  es: { translation: es }, // Add here
}
```

**3. Language switcher is automatic:**

```tsx
// Already in OverviewScreen
import LanguageSelector from '@/components/language-selector/LanguageSelector';
<LanguageSelector />;
```

---

## ⚠️ When to Run Prebuild

**Run prebuild ONLY when:**

- Changing `APP_NAME` or `APP_BUNDLE_ID` in `.env`
- Switching environment for the first time
- Adding/removing native plugins

**Daily development:**

- Just use `npm run ios:dev` or `npm run android:dev`
- No prebuild needed for code changes
