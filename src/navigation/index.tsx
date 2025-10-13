import { authStore } from '@/store/authStore';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

export default function RootStack() {
  const { authObject } = authStore((_) => _);

  if (authObject?.token) return <AppStack />;
  return <AuthStack />;
}
