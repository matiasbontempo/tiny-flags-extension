import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      sm: string,
      md: string,
      lg: string,
    },
    colors: {
      primary: string,
      secondary: string,
      light: string,
      text: string,
      background: string,
      disabled: string,
    },
  }
}
