import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/AuthStack';
import { AUTH_ROUTES } from '@/navigation/routes';

export type SignUpScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  typeof AUTH_ROUTES.SIGN_UP
>;

