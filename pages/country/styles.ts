import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 2rem;
 
  @media screen and (max-width: 575) {
  padding-top: 2.5rem;
   }
    
`;

export const CountryContainer = styled.div`
  max-width: 1280px;
  width: 100%;
 

  @media screen and (max-width: 1300px) {
    display: flex;
    max-width: 37rem;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media screen and (max-width: 575px) {
    max-width: 21rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export const CountryInfoContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  width: 100%;
  margin-top: 5rem;

  @media screen and (max-width: 1300px) {
    flex-direction:column;
  }
`;
export const Flag = styled.div`
 width: 35rem;
 height: 25rem;
 background-color: purple;

 @media screen and (max-width: 575px) {
  width: 19rem;
  height: 14rem;
    
  }
 
`;
export const InfoSection = styled.div`
  width: 35rem;

  @media screen and (max-width: 575px) {
    max-width: 21rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  
`;
export const CountryName = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 1300px) {
    margin-top: 3rem;
  }
`;
export const CountryDataContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;

  width: 100%;
  margin-bottom: 4.5rem;

  @media screen and (max-width: 575px) {
    flex-direction:column;
    margin-bottom: 2rem;
  }
`;
export const CountryData = styled.div``;
export const CountryData2 = styled.div`
  @media screen and (max-width: 575px) {
    margin-top:2rem;
  }
`;
export const BorderCountriesContainer = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;

  @media screen and (max-width: 575px) {
    flex-direction:column;
    align-items: flex-start;
  }
`;
export const BorderCountryButtonContainer = styled.div`
  margin-left: 1rem;

  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    margin-left: 0rem;
    margin-top: 1rem;
  }
`;