import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  height: 5rem;
  background: ${({ theme }) => theme.elements};
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow}; 

  > div {
    display: flex;
    max-width: 1280px;
    width: 100%;
    justify-content: space-between;
    padding: 0 1rem 0 1rem;
  }

`;