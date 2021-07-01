import Link from 'next/Link'

export function Menu() {
  return (
    <nav>
      <ul>
        <li><Link href="#">Projects</Link></li>
        <li><Link href="#">About</Link></li>
        <li><Link href="#">Contact</Link></li>
      </ul>
    </nav>
  )
}
