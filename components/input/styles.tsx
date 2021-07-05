import styled from 'styled-components';

export const Container = styled.div`

  @media screen and (max-width: 890px) {
     margin-bottom: 2.5rem;
 }
  > svg {
  margin-left: 2rem;
  position: absolute;
  margin-top: 1.25rem;


  @media screen and (max-width: 575px) {
     margin-left: 1rem;
    }
}


`;

export const InputWrapper = styled.input`
  width: 30rem;
  height: 3.5rem;
  padding-left: 4.25rem;
  border:0;
  background: ${({ theme }) => theme.elements};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};  
  color: ${({ theme }) => theme.textColor};

  @media screen and (max-width: 575px) {
      width: 100%;
      padding-left: 3rem;
    }

  
`;
