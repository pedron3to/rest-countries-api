import { InfoContainer, TitleInfo, TextInfo } from './styles'

interface InfoProps {
  title: string;
  info: string;
}

export function Info({ title, info }: InfoProps) {
  return (
    <InfoContainer>
      <TitleInfo>{title}</TitleInfo>
      <TextInfo>{info}</TextInfo>
    </InfoContainer>
  )
}