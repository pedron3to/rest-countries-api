import styled from 'styled-components';

export const Container = styled.main`
padding: 3rem 5rem 3rem 5rem;

@media screen and (max-width: 575px) {
    padding: 1.5rem 1rem 1.5rem 1rem;
  }
`;

export const SearchContainer = styled.div`
  display : flex;
  justify-content: space-between;

  @media screen and (max-width: 890px) {
    flex-direction: column;
    padding: 1.5rem 1rem 1.5rem 1rem;
  }
`;


export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;