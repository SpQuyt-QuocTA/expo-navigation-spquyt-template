import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OverviewScreen from '@/features/app/overview/OverviewScreen';
import DetailsScreen from '@/features/app/details/DetailsScreen';
import { APP_ROUTES } from './routes';

export type AppStackParamList = {
  [APP_ROUTES.OVERVIEW]: undefined;
  [APP_ROUTES.DETAILS]: { itemId: string };
};

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends AppStackParamList { }
  }
}

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={APP_ROUTES.OVERVIEW}
        component={OverviewScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={APP_ROUTES.DETAILS}
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

