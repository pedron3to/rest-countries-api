import { Logo } from "./Logo";
import { Container } from './styles'
import { SwitcherMode } from './SwitcherMode'

interface HeaderProps {
  onToggleTheme: () => void;
}

export function Header({ onToggleTheme }: HeaderProps) {
  return (
    <Container>
      <Logo />
      <SwitcherMode onToggleTheme={onToggleTheme} />
    </Container >
  )
}
