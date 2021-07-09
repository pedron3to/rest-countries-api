import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  height: 21rem;
  background-color: ${({ theme }) => theme.elements};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    cursor: pointer;
  }
`;

export const Flag = styled.div`
  width: 100%;
  height: 10rem;
  border-radius: ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0 0;
  background-repeat: no-repeat;
  background-size: 21rem 12rem;
  background-position: center;
`;
export const Country = styled.div`
  font-size: ${({ theme }) => theme.font.large};
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};

`;

export const CountryContainer = styled.div`
  padding-left: 1rem;
  padding-top: 2rem;
`;
export const InfoContainer = styled.div`
  margin-top: 1rem;
`;
