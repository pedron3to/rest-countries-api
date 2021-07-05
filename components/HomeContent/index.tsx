import React from "react";
import { Filter } from "../Filter";
import { Input } from "../input";
import { Container, SearchContainer } from "./styles";

export function HomeContent() {
  return (
    <Container>
      <SearchContainer>
        <Input />
        <Filter />
      </SearchContainer>
    </Container>
  )
}