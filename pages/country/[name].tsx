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
  return (
    <Container>
      <CountryContainer>
        <Button title="Back" type="back" />
        <CountryInfoContainer>
          <Flag>Flag</Flag>
          <InfoSection>
            <CountryName>Belgium</CountryName>
            <CountryDataContainer>
              <CountryData>
                <Info title="Native Name:" info="Belgi" />
                <Info title="Population:" info="11,319,51" />
                <Info title="Region:" info="Europe" />
                <Info title="Sub Region:" info="Western Europe" />
                <Info title="Capital:" info="Brussels" />
              </CountryData>
              <CountryData2>
                <Info title="Top Level Domain:" info="be" />
                <Info title="Currencies:" info="Euro" />
                <Info title="Languages:" info="Dutch, French" />
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
        </CountryInfoContainer>
      </CountryContainer>
    </Container>
  )
}
