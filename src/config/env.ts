import Constants from 'expo-constants';

/**
 * Environment Configuration
 * Access environment-specific values throughout the app
 */

export type Environment = 'development' | 'staging' | 'production';

export interface EnvConfig {
  appEnv: Environment;
  apiUrl: string;
}

// Get config from expo-constants extra field (set in app.config.js)
const extra = Constants.expoConfig?.extra || {};

export const ENV: EnvConfig = {
  appEnv: (extra.appEnv || 'development') as Environment,
  apiUrl: extra.apiUrl || 'https://api-dev.example.com',
};

// Helper functions
export const isDevelopment = () => ENV.appEnv === 'development';
export const isStaging = () => ENV.appEnv === 'staging';
export const isProduction = () => ENV.appEnv === 'production';

// Log current environment on import (only in dev mode)
if (__DEV__) {
  console.log('🌍 Environment:', ENV.appEnv);
  console.log('🔗 API URL:', ENV.apiUrl);
}

