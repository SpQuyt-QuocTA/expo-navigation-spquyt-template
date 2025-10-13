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
      // Example:
      // const response = await authApi.signUp(name, email, password);
      // setAuthObject({ token: response.token, refreshToken: response.refreshToken });
      // setUser({ email: response.user.email, name: response.user.name, avatar: response.user.avatar });

      // Simulate API call with 3 second delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Simulate successful sign up with auth tokens
      setAuthObject({
        token: 'new-user-token-789',
        refreshToken: 'new-user-refresh-token-012',
      });

      // Simulate user data from API response
      setUser({
        email: email,
        name: name,
        avatar: `https://i.pravatar.cc/150?u=${email}`,
      });
    } catch (error) {
      // Handle error (could add error state here)
      console.error('Sign up failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading };
};

