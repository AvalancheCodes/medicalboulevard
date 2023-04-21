import { useCallback } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

interface IProps {
  options: Array<{ icon?: string, title: string, value: string }>;
  selected: string;
  setSelected: (item: string) => void;
  icon?: string;
  variant?: string;

  [key: string]: any;
}

const DropdownSelect = ({
                          options,
                          selected,
                          setSelected,
                          icon,
                          variant,
                          ...props
                        }: IProps) => {

  const handleSelect = useCallback((eventKey, e) => {
    setSelected(eventKey);
  }, [setSelected]);

  return (
    <Dropdown {...props} onSelect={handleSelect}>
      <Dropdown.Toggle variant={variant ? variant : 'link'}>
        {icon && <i className={`${icon} me-2`}></i>}
        {selected}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map(option => (
          <Dropdown.Item key={option.value} eventKey={option.value} active={option.value === selected}>
            {option.icon && <i className={`${option.icon} fs-lg opacity-60 me-2`}></i>}
            {option.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownSelect
