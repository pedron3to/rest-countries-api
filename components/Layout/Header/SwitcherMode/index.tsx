import { Container } from './styles';
import { Dark } from './Dark'
import { Light } from './Light'
import { useState } from 'react';

interface SwitcherModeProps {
  onToggleTheme: () => void;
}

export function SwitcherMode({ onToggleTheme }: SwitcherModeProps) {
  const [toogle, isToggle] = useState(false);

  function ToggleTheme() {
    isToggle(prev => !prev ? true : false)
  }
  return (
    <Container>
      {!!toogle ?
        <Dark onToggleTheme={() => { onToggleTheme(); ToggleTheme() }} />
        : <Light onToggleTheme={() => { onToggleTheme(); ToggleTheme() }} />}
    </Container>
  )
}
