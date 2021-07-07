import {
  CardContainer,
  Flag,
  Country,
  Info,
  TitleInfo,
  TextInfo,
  InfoContainer,
  CountryContainer

} from './styles'

export function Card() {
  return (
    <CardContainer>
      <Flag />
      <CountryContainer>
        <Country>Country</Country>
        <InfoContainer>
          <Info>
            <TitleInfo>Population:</TitleInfo>
            <TextInfo>81.9000.00</TextInfo>
          </Info>
          <Info>
            <TitleInfo>Region:</TitleInfo>
            <TextInfo>Europe</TextInfo>
          </Info>
          <Info>
            <TitleInfo>Capital:</TitleInfo>
            <TextInfo>Berlin</TextInfo>
          </Info>
        </InfoContainer>
      </CountryContainer>
    </CardContainer>
  )
}