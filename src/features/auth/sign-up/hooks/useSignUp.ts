import { useState } from 'react';
import { authStore } from '@/store/authStore';
import { userStore } from '@/store/userStore';

export const useSignUp = () => {
  const setAuthObject = authStore((state) => state.setAuthObject);
  const setUser = userStore((state) => state.setUser);
  const [loading, setLoading] = useState(false);

  const signUp = async (name: string, email: string, password: string) => {
    setLoading(true);

    try {
      // TODO: Replace with actual auth API call
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setAuthObject({
        token: 'new-user-token-789',
        refreshToken: 'new-user-refresh-token-012',
      });

      setUser({
        email: email,
        name: name,
        avatar: `https://i.pravatar.cc/150?u=${email}`,
      });
    } catch (error) {
      console.error('Sign up failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading };
};

