import { DefaultTheme } from 'styled-components/native';
import { colors } from '../../../tokens/colors';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: {
      main: colors.green200,
      dark: colors.green700,
      light: colors.green300,
    },
    secondary: {
      main: colors.orange200,
      dark: colors.orange700,
      light: colors.orange300,
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
