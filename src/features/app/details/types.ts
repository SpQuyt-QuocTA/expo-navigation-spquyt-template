import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@/navigation/AppStack';
import { APP_ROUTES } from '@/navigation/routes';

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  typeof APP_ROUTES.DETAILS
>;

export type DetailsScreenProps = NativeStackScreenProps<
  AppStackParamList,
  typeof APP_ROUTES.DETAILS
>;

