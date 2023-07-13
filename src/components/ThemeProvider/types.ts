import { ReactNode } from 'react';

export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

export interface ThemeProps {
  theme?: Theme;
  children: ReactNode;
}
