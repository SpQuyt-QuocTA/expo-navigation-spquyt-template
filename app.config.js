const dotenv = require('dotenv');
const path = require('path');

// Determine which .env file to load based on APP_ENV or default to development
const ENV = process.env.APP_ENV || 'development';
const envPath = path.resolve(__dirname, `.env.${ENV}`);

// Load environment variables with override: true to overwrite existing values
const result = dotenv.config({ path: envPath, override: true });

console.log('\n┌─────────────────────────────────────────────────────────────┐');
console.log('│  🔧  Environment Configuration                              │');
console.log('├─────────────────────────────────────────────────────────────┤');
console.log(`│  ENV:        ${ENV.padEnd(44)}│`);
console.log(`│  File:       ${path.basename(envPath).padEnd(44)}│`);
if (result.error) {
  console.log('│  Status:     ❌ Error loading .env file                     │');
} else {
  console.log('│  Status:     ✅ Loaded successfully                         │');
  console.log(`│  APP_NAME:   ${(process.env.APP_NAME || 'N/A').padEnd(44)}│`);
  console.log(`│  BUNDLE_ID:  ${(process.env.APP_BUNDLE_ID || 'N/A').padEnd(44)}│`);
}
console.log('└─────────────────────────────────────────────────────────────┘\n');

module.exports = {
  expo: {
    name: process.env.APP_NAME || 'expo-navigation-spquyt-template',
    slug: 'expo-navigation-spquyt-template',
    version: '1.0.0',
    web: {
      favicon: './assets/favicon.png',
    },
    experiments: {
      tsconfigPaths: true,
    },
    plugins: [
      "expo-asset",
      "expo-font",
      [
        "expo-localization",
        {
          fallbackLocale: 'en',
          availableLocales: ['en', 'vi'],
        },
      ],
      [
        'expo-dev-client',
        {
          launchMode: 'most-recent',
        },
      ],
    ],
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: process.env.APP_BUNDLE_ID || 'com.anonymous.expo-navigation-spquyt-template',
      appleTeamId: '9M84NL46T2',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: process.env.APP_BUNDLE_ID || 'com.anonymous.exponavigationspquyttemplate',
    },
    // Expose environment variables to the app via extra
    extra: {
      appEnv: process.env.APP_ENV || 'development',
      apiUrl: process.env.API_URL || 'https://api-dev.example.com',
    },
  },
};

