import React from "react";
import { Card } from "../Card";
import { Filter } from "../Filter";
import { SearchInput } from "../SearchInput";
import { Container, SearchContainer, FilterContainer, CardContainer } from "./styles";

export function HomeContent() {
  return (
    <Container>
      <SearchContainer>
        <SearchInput />
        <FilterContainer>
          <Filter />
        </FilterContainer>
      </SearchContainer>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </Container>
  )
}