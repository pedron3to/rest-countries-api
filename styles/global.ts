import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
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

h1 {
  font-size: ${({ theme }) => theme.font.large};
  font-weight: 800;

  @media screen and (max-width: 575px) {
    font-size: ${({ theme }) => theme.font.medium};
  }
}


h2 {
  font-size: ${({ theme }) => theme.font.medium};
  font-weight: 600;

  @media screen and (max-width: 575px) {
      font-size: ${({ theme }) => theme.font.medium};
      font-weight: 600;
    } 
}
`;