import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { z } from 'zod';
import { AuthStackParamList } from '@/navigation/AuthStack';
import { AUTH_ROUTES } from '@/navigation/routes';
import { signUpSchema } from './schema';

export type SignUpScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  typeof AUTH_ROUTES.SIGN_UP
>;

export type SignUpFormData = z.infer<typeof signUpSchema>;

