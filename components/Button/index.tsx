import Link from 'next/Link';
import { BiArrowBack } from 'react-icons/bi'

import { LargeButton, NormalButton } from './styles'
interface ButtonProps {
  title: string;
  type?: 'back' | null;
}

export function Button({ title, type }: ButtonProps) {
  return (
    type === "back"
      ? <Link href='/'>
        <LargeButton >
          <BiArrowBack size={16} />
          <h2>{title}</h2>
        </LargeButton >
      </Link>
      : <NormalButton>
        <h2>{title}</h2>
      </NormalButton >
  )
}
