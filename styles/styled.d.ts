import 'styled-components';
import theme from './theme'

declare module 'styled-components' {
  // export interface DefaultTheme {
  //   borderRadius: string;
  //   backgroundColor: string,
  //   textColor: string,
  //   elements: string,
  //   spacing: {
  //     small: string,
  //     medium: string,
  //     large: string,
  //   },
  //   font: {
  //     medium: string,
  //     large: string,
  //   }
  // }
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType { }
}