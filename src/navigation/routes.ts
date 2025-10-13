/**
 * Navigation Routes
 * Centralized route names for type safety and maintainability
 */

export const AUTH_ROUTES = {
  LOGIN: 'Login',
  SIGN_UP: 'SignUp',
} as const;

export const APP_ROUTES = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
} as const;

export const ROOT_ROUTES = {
  AUTH: 'Auth',
  APP: 'App',
} as const;

// Combined routes object for easy access
export const ROUTES = {
  ...ROOT_ROUTES,
  ...AUTH_ROUTES,
  ...APP_ROUTES,
} as const;

// Type exports for TypeScript
export type AuthRouteName = (typeof AUTH_ROUTES)[keyof typeof AUTH_ROUTES];
export type AppRouteName = (typeof APP_ROUTES)[keyof typeof APP_ROUTES];
export type RootRouteName = (typeof ROOT_ROUTES)[keyof typeof ROOT_ROUTES];
export type RouteName = (typeof ROUTES)[keyof typeof ROUTES];

