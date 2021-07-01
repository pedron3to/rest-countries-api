import { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
  onToggleTheme: () => void;
}

export function Layout({ children, onToggleTheme }: LayoutProps) {
  return (
    <main>
      <Header onToggleTheme={onToggleTheme} />
      {children}
    </main>
  )
}
