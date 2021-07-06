import styled from 'styled-components';

export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding-top: 3rem;

  

@media screen and (max-width: 575px) {
    padding: 1.5rem 1rem 1.5rem 1rem;
  }
`;

export const SearchContainer = styled.div`
  max-width:1280px;
  width: 100%;
  display : flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (max-width: 890px) {
    align-items: start;
    flex-direction: column;
    padding: 1rem;
  }
`;


export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
 display: grid;
 
 grid-template-columns: repeat(4, 1fr);
 row-gap: 3rem;

 justify-content: space-between;
 margin-top: 3rem;
  
`;