import {
  CardContainer,
  Flag,
  Title,
  Info,
  TitleInfo,
  TextInfo,
  InfoContainer

} from './styles'

export function Card() {
  return (
    <CardContainer>
      <Flag />
      <Title>title</Title>
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
    </CardContainer>
  )
}