import React, { FunctionComponent } from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { mapTheme } from './maps';
import { Theme, ThemeProps } from './types';

export const ThemeProvider: FunctionComponent<ThemeProps> = ({ children, theme = Theme.Light }) => {
  const selectedTheme: DefaultTheme = mapTheme[theme];

  return <StyledThemeProvider theme={selectedTheme}>{children}</StyledThemeProvider>;
};
