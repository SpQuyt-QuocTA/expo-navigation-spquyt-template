/**
 * Logger Utility
 * Only logs in development mode (__DEV__)
 */

export const logger = {
  info: (...args: any[]) => {
    if (__DEV__) {
      console.log('ℹ️ [INFO]', ...args);
    }
  },

  warn: (...args: any[]) => {
    if (__DEV__) {
      console.warn('⚠️ [WARN]', ...args);
    }
  },

  error: (...args: any[]) => {
    if (__DEV__) {
      console.error('❌ [ERROR]', ...args);
    }
  },
};

