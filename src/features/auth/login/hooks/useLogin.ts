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
      // Example:
      // const response = await authApi.login(email, password);
      // setAuthObject({ token: response.token, refreshToken: response.refreshToken });
      // setUser({ email: response.user.email, name: response.user.name, avatar: response.user.avatar });

      // Simulate API call with 3 second delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate successful login with auth tokens
      setAuthObject({
        token: 'demo-token-123',
        refreshToken: 'demo-refresh-token-456',
      });

      // Simulate user data from API response
      setUser({
        email: email,
        name: 'Demo User',
        avatar: 'https://i.pravatar.cc/150?img=1',
      });
    } catch (error) {
      // Handle error (could add error state here)
      console.error('Login failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

