import { useState } from "react";
import { DropDown } from "./dropdown";
import { ButtonFilter } from './styles'
import { GoChevronDown } from 'react-icons/go'

export function Filter() {
  const [dropdown, setDropDown] = useState(true)

  function handleClick() {
    setDropDown((prevState) => !prevState)
  }

  return (
    <>
      <ButtonFilter onClick={handleClick}>
        <h2>Filter by Region</h2>
        <GoChevronDown />


      </ButtonFilter>
      {dropdown && <DropDown />}
    </>
  )
}