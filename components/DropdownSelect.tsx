import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

interface IProps{
  defaultValue: string;
  options: Array<string[]>;
  icon?: string;
  variant?: string;
  darkMenu?: boolean;
  [key: string]: any;
}

const DropdownSelect = ({
  defaultValue,
  options,
  icon,
  variant,
  darkMenu,
  ...props
}: IProps) => {

  const [selected, setSelected] = useState(defaultValue)

  const iconEl = icon ? <i className={`${icon} me-2`}></i> : ''

  const handleSelect = (eventKey, e) => {
    setSelected(eventKey)
  }

  return (
    <Dropdown {...props} onSelect={handleSelect}>
      <Dropdown.Toggle variant={variant ? variant : 'link'}>
        {iconEl}
        {selected}
      </Dropdown.Toggle>
      <Dropdown.Menu variant={darkMenu ? 'dark' : ''}>
        {options ? options.map((option, indx) =>
        <Dropdown.Item key={indx} eventKey={option[1]}>
          {option[0] && <i className={`${option[0]} fs-lg opacity-60 me-2`}></i>}
          {option[1]}
        </Dropdown.Item>) : ''}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownSelect
