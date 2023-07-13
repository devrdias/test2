import { DefaultTheme } from 'styled-components/native';
import { darkTheme, lightTheme } from './themes';
import { Theme } from './types';

export const mapTheme: Record<Theme, DefaultTheme> = {
  [Theme.Light]: lightTheme,
  [Theme.Dark]: darkTheme,
};
