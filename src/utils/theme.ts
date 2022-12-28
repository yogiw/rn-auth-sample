import {DefaultTheme, Theme, DarkTheme} from '@react-navigation/native';

export const lightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: '#7938F2',
    buttonText: '#fff',
    error: '#FF395C',
    inputBackground: '#F8F7F8',
    placeholderText: '#D2D2DF',
    text: '#3E3D52',
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: '#303030',
    primary: '#7938F2',
    buttonText: '#fff',
    error: '#FA8251',
    inputBackground: '#222',
    placeholderText: '#BFC0C3',
    text: '#fff',
  },
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export interface ExtendedTheme extends Theme {
  colors: Theme['colors'] & typeof lightTheme.colors;
}

declare module '@react-navigation/native' {
  export function useTheme(): ExtendedTheme;
}
