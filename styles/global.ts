import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  -webkit-font-smoothing: antialiased;
  font-family: 'Nunito', sans-serif;
  
}
body, input, button {
  font-size: 16px;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}
`;