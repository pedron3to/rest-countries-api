import styled from 'styled-components';

export const LargeButton = styled.button`
  display: flex;
  align-items:center;
  justify-content:center;

  width: 8.5rem;
  height: 2.5rem;
  
  border:0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.textColor};
  
  >h2 {
    margin-left: .5rem;
    font-weight: 400;
  }

  @media screen and (max-width: 575px) {
    width: 6.5rem;
    height: 2rem;

    >h2 {
    font-size: ${({ theme }) => theme.font.medium};
    margin-left: .5rem;
    font-weight: 400;
  }
  }
  `;

export const NormalButton = styled.button`
  width: 6rem;
  height: 1.8rem;
  
  margin-right: 0.75rem;
  border:0;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.textColor};
  
  >h2 {
    font-weight: 400;
  }
`;