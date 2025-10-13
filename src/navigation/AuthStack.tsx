import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/features/auth/login/LoginScreen';
import SignUpScreen from '@/features/auth/sign-up/SignUpScreen';
import { AUTH_ROUTES } from './routes';

export type AuthStackParamList = {
  [AUTH_ROUTES.LOGIN]: undefined;
  [AUTH_ROUTES.SIGN_UP]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AUTH_ROUTES.LOGIN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AUTH_ROUTES.SIGN_UP}
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

