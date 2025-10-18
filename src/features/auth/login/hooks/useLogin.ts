import { useState } from 'react';
import { authStore } from '@/store/authStore';
import { userStore } from '@/store/userStore';

export const useLogin = () => {
  const setAuthObject = authStore((state) => state.setAuthObject);
  const setUser = userStore((state) => state.setUser);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);

    try {
      // TODO: Replace with actual auth API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setAuthObject({
        token: 'demo-token-123',
        refreshToken: 'demo-refresh-token-456',
      });

      setUser({
        email: email,
        name: 'Demo User',
        avatar: 'https://i.pravatar.cc/150?img=1',
      });
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

