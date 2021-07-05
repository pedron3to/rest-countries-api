import { useState } from "react";
import { DropDown } from "./dropdown";
import { ButtonFilter } from './styles'
import { GoChevronDown } from 'react-icons/go'

export function Filter() {
  const [dropdown, SetDropDown] = useState(false)

  return (
    <>
      <ButtonFilter>
        <h2>
          Filter by Region
        </h2>
        <GoChevronDown />


      </ButtonFilter>
      {dropdown && <DropDown />}
    </>
  )
}