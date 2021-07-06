import React from "react";
import { Filter } from "../Filter";
import { Input } from "../input";
import { Container, SearchContainer, FilterContainer } from "./styles";

export function HomeContent() {
  return (
    <Container>
      <SearchContainer>
        <Input />
        <FilterContainer>
          <Filter />
        </FilterContainer>
      </SearchContainer>
    </Container>
  )
}