import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import { Info } from "../../components/Info"
import { Button } from '../../components/Button';
import {
  CountryContainer,
  CountryInfoContainer,
  Flag,
  InfoSection,
  CountryName,
  CountryDataContainer,
  CountryData,
  CountryData2,
  BorderCountriesContainer,
  BorderCountryButtonContainer,
  Container

} from './styles'


export default function Country() {
  const [countries, setCountries] = useState([])
  const router = useRouter();

  const url = `https://restcountries.eu/rest/v2/name/${router.query.name}`;

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url)
      const countries = await response.json();

      console.log(countries)

      setCountries(countries)
    }

    fetchCountryData();
  }, [])




  return (
    <Container>
      <CountryContainer>
        <Button title="Back" type="back" />
        <CountryInfoContainer>
          {countries.map((country) => {
            const {
              name,
              nativeName,
              population,
              region,
              subregion,
              topLevelDomain,
              numericCode,
              currencies,
              languages,
              flag


            } = country;
            return (
              <div key={numericCode}>
                <Flag style={{ backgroundImage: `url(${flag})` }} />

                <InfoSection>
                  <CountryName>{name}</CountryName>
                  <CountryDataContainer>
                    <CountryData>
                      <Info title="Native Name:" info={nativeName} />
                      <Info title="Population:" info={population} />
                      <Info title="Region:" info={region} />
                      <Info title="Sub Region:" info={subregion} />
                      <Info title="Capital:" info={subregion} />
                    </CountryData>
                    <CountryData2>
                      <Info title="Top Level Domain:" info={topLevelDomain} />
                      {currencies.map((currency: string) => {
                        const { name: string } = currency;
                        return <Info title="Currencies:" info={name} />
                      })}


                      <Info title="Languages:" info={

                        languages.map((language: string) => {
                          const { name } = language;
                          return name
                        })


                      } />
                    </CountryData2>
                  </CountryDataContainer>
                  <BorderCountriesContainer>
                    <h2>Border Countries:</h2>
                    <BorderCountryButtonContainer>
                      <Button title="Back" />
                      <Button title="Back" />
                      <Button title="Back" />
                    </BorderCountryButtonContainer>
                  </BorderCountriesContainer>
                </InfoSection>
              </div>
            )
          })}
        </CountryInfoContainer>
      </CountryContainer>
    </Container >
  )
}
