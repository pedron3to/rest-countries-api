import Link from 'next/Link'
import { items } from './items'
import { Ul } from './styles'


export function DropDown() {
  return (
    <Ul>
      {items.map(({ title, path }) => (
        <li key={title}>
          <Link href={path}>
            {title}
          </Link>
        </li>
      ))}
    </Ul>
  )
}
