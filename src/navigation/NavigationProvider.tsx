import { useTheme } from '@/context/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import { ReactNode, useMemo } from 'react';
import { View } from 'react-native';

interface NavigationProviderProps {
  children: ReactNode;
}

/**
 * Navigation Provider that syncs React Navigation theme with our theme system
 * Applies NativeWind CSS variables for dynamic theming
 */
export default function NavigationProvider({ children }: NavigationProviderProps) {
  const { colors, isDark, themeVars } = useTheme();

  const navigationTheme = useMemo(
    () => ({
      dark: isDark,
      colors: {
        primary: colors.primary,
        background: colors.background,
        card: colors.card,
        text: colors.text,
        border: colors.border,
        notification: colors.error,
      },
      fonts: {
        // Required by React Navigation, but we use NativeWind for font styling
        regular: { fontFamily: 'System', fontWeight: '400' as const },
        medium: { fontFamily: 'System', fontWeight: '500' as const },
        bold: { fontFamily: 'System', fontWeight: '700' as const },
        heavy: { fontFamily: 'System', fontWeight: '900' as const },
      },
    }),
    [colors, isDark]
  );

  // Apply theme CSS variables using NativeWind's vars() on root View
  return (
    <View style={[{ flex: 1 }, themeVars]}>
      <NavigationContainer theme={navigationTheme}>
        {children}
      </NavigationContainer>
    </View>
  );
}

