import { FiSun } from 'react-icons/fi';

interface LightProps {
  onToggleTheme: () => void;
}

export function Light({ onToggleTheme }: LightProps) {
  return (
    <>
      <i
        aria-pressed="false"
        role="button"
        tabIndex={0}
        onClick={onToggleTheme}
      >
        <FiSun size={16} />
      </i>
      <h2>Light Mode</h2>
    </>
  )
}
