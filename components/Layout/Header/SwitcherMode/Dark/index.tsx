import { FiMoon } from 'react-icons/fi';

interface DarkProps {
  onToggleTheme: () => void;
}

export function Dark({ onToggleTheme }: DarkProps) {
  return (
    <>
      <i
        aria-pressed="false"
        role="button"
        tabIndex={0}
        onClick={onToggleTheme}
      >
        <FiMoon size={16} />
      </i>
      <h2>Dark Mode</h2>
    </>
  )
}
