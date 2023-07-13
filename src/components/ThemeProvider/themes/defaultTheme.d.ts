import 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        dark: string;
        light: string;
      };
      secondary: {
        main: string;
        dark: string;
        light: string;
      };
      neutral: {
        white: string;
        black: string;
        background: string;
        surface: string;
        textPrimary: string;
        textSecondary: string;
      };
      semantic: {
        success: string;
        error: string;
        warning: string;
        info: string;
      };
    };
  }
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends StyledComponentsDefaultTheme {}
}
