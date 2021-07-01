import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    backgroundColor: string,
    textColor: string,
    spacing: {
      small: string,
      medium: string,
      large: string,
    },
  }
}