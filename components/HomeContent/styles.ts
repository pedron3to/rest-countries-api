import styled from 'styled-components';

export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding-top: 3rem;

@media screen and (max-width: 575px) {
    padding: 1.5rem 0 1.5rem 0;
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
  }

`;


export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
 width: 100%;
 max-width: 1280px;
 padding-left: 1rem;
 padding-right: 1rem;
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 row-gap: 3rem;
 column-gap: 3rem;
 justify-content: space-between;
 margin-top: 3rem;

 @media screen and (max-width: 1150px) {
  grid-template-columns: repeat(3, 1fr);
 }

 @media screen and (max-width: 800px) {
  grid-template-columns: repeat(2, 1fr);
 }
 
 @media screen and (max-width: 575px) {
  grid-template-columns: repeat(1, 1fr);
  padding-left: 3rem;
  padding-right: 3rem;
 }
 
  
`;