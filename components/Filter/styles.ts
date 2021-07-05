import styled from 'styled-components';

export const ButtonFilter = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  width: 12.5rem;
  height: 3.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border:0;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.textColor};
  box-shadow: ${({ theme }) => theme.shadow};

  >h2{
    margin-right: 0.5rem;
  }

`;