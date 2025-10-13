# Expo Navigation Template

Multi-environment React Native template with:

- **Expo SDK**: 54.0.0
- **React Native**: 0.81.4
- **React Navigation**: 7.1.6
- **Expo Dev Client** for custom native code
- **NativeWind** (Tailwind CSS)
- **TypeScript** support

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

---

## ⚠️ When to Run Prebuild

**Run prebuild ONLY when:**

- Changing `APP_NAME` or `APP_BUNDLE_ID` in `.env`
- Switching environment for the first time
- Adding/removing native plugins

**Daily development:**

- Just use `npm run ios:dev` or `npm run android:dev`
- No prebuild needed for code changes
