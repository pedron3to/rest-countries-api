import styled from 'styled-components';

export const ButtonFilter = styled.button`
  width: 12.5rem;
  height: 3.5rem;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-radius: ${({ theme }) => theme.borderRadius};
  border:0;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.textColor};
  box-shadow: ${({ theme }) => theme.shadow};

  >h2{
    margin-right: 0.5rem;
    font-weight: 500;
  }
`;

export const Ul = styled.ul`
  position: absolute;
  width: 12.5rem;
  height: 10rem;
  padding: 0.75rem 1.5rem;
  margin-top: 4rem;

  list-style: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  border:0;
  background: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.shadow};

  > li {
    margin-bottom: 0.375rem;
    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.textColor}
    
  } 
  }


`;