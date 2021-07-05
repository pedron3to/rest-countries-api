import styled from 'styled-components'

export const Container = styled.header`
   height: 5rem;
  background: ${({ theme }) => theme.elements};
  display: flex;
  padding: 0 5rem 0 5rem;
  align-items: center;
  justify-content: space-between;

  box-shadow: ${({ theme }) => theme.shadow}; 

  @media screen and (max-width: 575px) {
      padding: 0 1rem 0 1rem;
    } 
`;