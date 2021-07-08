import Link from 'next/Link'
import {
  CardContainer,
  Flag,
  Country,
  // Info,
  // TitleInfo,
  // TextInfo,
  InfoContainer,
  CountryContainer

} from './styles'

import { Info } from '../Info'

export function Card() {
  return (
    <Link href="/country">
      <CardContainer>
        <Flag />
        <CountryContainer>
          <Country>Country</Country>
          <InfoContainer>
            <Info title="Population:" info="81.9000.00" />
            <Info title="Region:" info="Europe" />
            <Info title="Capital:" info="Berlin" />
          </InfoContainer>
        </CountryContainer>
      </CardContainer>
    </Link>
  )
}