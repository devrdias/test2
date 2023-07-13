import { DefaultTheme } from 'styled-components/native';
import { colors } from '../../../tokens/colors';

export const darkTheme: DefaultTheme = {
  colors: {
    primary: {
      main: colors.blue200,
      dark: colors.blue700,
      light: colors.blue300,
    },
    secondary: {
      main: colors.yellow200,
      dark: colors.yellow700,
      light: colors.yellow300,
    },
    neutral: {
      white: '#FFFFFF',
      black: '#000000',
      background: '#212121',
      surface: '#424242',
      textPrimary: '#F5F5F5',
      textSecondary: '#9E9E9E',
    },
    semantic: {
      success: colors.green500,
      error: colors.red500,
      warning: colors.yellow800,
      info: colors.blue500,
    },
  },
};
