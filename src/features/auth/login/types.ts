import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/AuthStack';
import { AUTH_ROUTES } from '@/navigation/routes';

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  typeof AUTH_ROUTES.LOGIN
>;

