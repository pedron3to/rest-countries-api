import { Container, InputWrapper } from './styles'
import { BsSearch } from 'react-icons/bs'

export function Input() {
  return (
    <Container>
      <BsSearch size={16} />
      <InputWrapper
        type='text'
        placeholder="Search for a country..."
      />
    </Container>
  )
}