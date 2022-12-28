import EncryptedStorage from 'react-native-encrypted-storage';
import create from 'zustand';
import {persist} from 'zustand/middleware';
import {STORAGE_CREDENTIALS} from '../utils/constants';

type AuthState = {
  _hasHydrated: boolean;
  isAuthenticated: boolean;
  username: string | null;
  password: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
  setHydrate: (state: boolean) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      _hasHydrated: false,
      isAuthenticated: false,
      username: null,
      password: null,
      setHydrate: val => set(() => ({_hasHydrated: val})),
      login: (username, password) =>
        set(() => ({isAuthenticated: true, username, password})),
      logout: () =>
        set(() => ({
          isAuthenticated: false,
          username: null,
          password: null,
        })),
    }),
    {
      name: STORAGE_CREDENTIALS,
      getStorage: () => EncryptedStorage,
      onRehydrateStorage: () => state => {
        state?.setHydrate(true);
      },
    },
  ),
);

export default useAuthStore;
