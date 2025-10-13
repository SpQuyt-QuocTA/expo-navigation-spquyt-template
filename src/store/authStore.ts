import { create } from 'zustand';

export interface IAuthObject {
  token: string;
  refreshToken: string;
}

export interface IAuthState {
  authObject: IAuthObject | null;
  setAuthObject: (authObject: IAuthObject | null) => void;
}

export const authStore = create<IAuthState>((set) => ({
  authObject: null,
  setAuthObject: (authObject) => set({ authObject }),
}));

