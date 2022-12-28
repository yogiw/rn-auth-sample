import EncryptedStorage from 'react-native-encrypted-storage';
import create from 'zustand';
import {persist} from 'zustand/middleware';
import {STORAGE_COLOR_SCHEME} from '../utils/constants';

type ColorScheme = 'light' | 'dark';

type ColorSchemeState = {
  activeScheme: ColorScheme;
  colorScheme: ColorScheme;
  userColorScheme: ColorScheme | null;
  setColorScheme: (colorScheme: ColorScheme) => void;
  setUserColorScheme: (userColorScheme: ColorScheme | null) => void;
};

export const useColorSchemeStore = create<ColorSchemeState>()(
  persist(
    set => ({
      activeScheme: 'light',
      colorScheme: 'light',
      userColorScheme: null,
      setColorScheme: colorScheme =>
        set(state => ({
          activeScheme: state.userColorScheme ?? colorScheme,
          colorScheme,
        })),
      setUserColorScheme: userColorScheme =>
        set(state => ({
          activeScheme: userColorScheme ?? state.colorScheme,
          userColorScheme,
        })),
    }),
    {name: STORAGE_COLOR_SCHEME, getStorage: () => EncryptedStorage},
  ),
);
