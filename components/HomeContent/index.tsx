import React from "react";
import { Card } from "../Card";
import { Filter } from "../Filter";
import { Input } from "../input";
import { Container, SearchContainer, FilterContainer, CardContainer } from "./styles";

export function HomeContent() {
  return (
    <Container>
      <SearchContainer>
        <Input />
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