import { ApiError } from "next/dist/next-server/server/api-utils";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../Card";
import { Filter } from "../Filter";
import { SearchInput } from "../SearchInput";
import { Container, SearchContainer, FilterContainer, CardContainer } from "./styles";


export function HomeContent() {
  const [countries, setCountries] = useState([])

  const url = 'https://restcountries.eu/rest/v2';

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url)
      const countries = await response.json();

      setCountries(countries)

    }

    fetchCountryData();

  }, [])

  return (
    <Container>
      <SearchContainer>
        <SearchInput />
        <FilterContainer>
          <Filter />
        </FilterContainer>
      </SearchContainer>
      <CardContainer>
        {countries.map(({
          name,
          population,
          region,
          numericCode,
          capital,
          flag
        }) => {

          return <Card
            key={numericCode}
            name={name}
            population={population}
            region={region}
            capital={capital}
            flag={flag}
          />
        })
        }


      </CardContainer>
    </Container>
  )
}
