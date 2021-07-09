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
import { urlObjectKeys } from 'next/dist/next-server/lib/utils'

interface CardProps {
  name: 'string';
  population: 'string';
  region: 'string';
  capital: 'capital';
  flag: 'string';
}

export function Card({ name, population, region, capital, flag }: CardProps) {
  return (
    <Link href={`/country/${name}`}>
      <CardContainer>
        <Flag style={{ backgroundImage: `url(${flag})` }}>
        </Flag>
        <CountryContainer>
          <Country>{name}</Country>
          <InfoContainer>
            <Info title="Population:" info={population} />
            <Info title="Region:" info={region} />
            <Info title="Capital:" info={capital} />
          </InfoContainer>
        </CountryContainer>
      </CardContainer>
    </Link>
  )
}
