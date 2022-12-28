import EncryptedStorage from 'react-native-encrypted-storage';
import create from 'zustand';
import {persist} from 'zustand/middleware';
import {STORAGE_CREDENTIALS} from '../utils/constants';

type AuthState = {
  isAuthenticated: boolean | null;
  username: string | null;
  password: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      isAuthenticated: null,
      username: null,
      password: null,
      login: (username, password) =>
        set(() => ({isAuthenticated: true, username, password})),
      logout: () =>
        set(() => ({
          isAuthenticated: false,
          username: null,
          password: null,
        })),
    }),
    {name: STORAGE_CREDENTIALS, getStorage: () => EncryptedStorage},
  ),
);

export default useAuthStore;
