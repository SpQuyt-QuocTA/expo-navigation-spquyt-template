import { authStore } from '@/store/authStore';
import { userStore } from '@/store/userStore';

export const useLogout = () => {
  const setAuthObject = authStore((state) => state.setAuthObject);
  const clearUser = userStore((state) => state.clearUser);

  const logout = () => {
    // TODO: Add API call to invalidate token on backend
    setAuthObject(null);
    clearUser();
  };

  return { logout };
};

