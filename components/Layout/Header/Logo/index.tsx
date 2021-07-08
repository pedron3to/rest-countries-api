import Link from 'next/Link'
import styled from 'styled-components';

export const Container = styled.div`
 cursor: pointer;
`;



export function Logo() {
  return (
    <Container>
      <Link href='/'>
        <h1>Where in the world?</h1>
      </Link>
    </Container>
  )
}
