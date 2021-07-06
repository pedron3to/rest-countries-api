import 'styled-components';
import theme from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    backgroundColor: string,
    textColor: string,
    elements: string,
    shadow: string,
    spacing: {
      small: string,
      medium: string,
      large: string,
    },
    font: {
      medium: string,
      large: string,
    },
  }

}