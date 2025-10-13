import { create } from 'zustand';

export interface IUser {
  email: string;
  name?: string;
  avatar?: string;
}

export interface IUserState {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  clearUser: () => void;
}

export const userStore = create<IUserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

