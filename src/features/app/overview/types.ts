import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '@/navigation/AppStack';
import { APP_ROUTES } from '@/navigation/routes';

export type OverviewScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  typeof APP_ROUTES.OVERVIEW
>;

