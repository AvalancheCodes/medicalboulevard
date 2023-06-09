import { CSSProperties, useState } from 'react'

interface IProps {
  size?: string;
  light?: boolean;
  className?: string;
  style?: CSSProperties;

  // All other props
  [x: string]: any;
}

const PasswordToggle = ({
                          size,
                          light,
                          className,
                          style,
                          ...props
                        }: IProps) => {

  const inputSize = size ? ` form-control-${size}` : '',
    isLight = light ? ' form-control-light' : '',
    extraClass = className ? ` ${className}` : ''

  const [show, setShow] = useState(false)

  return (
    <div className={`password-toggle${extraClass}`} style={style}>
      <input
        {...props}
        type={show ? 'text' : 'password'}
        className={`form-control${inputSize}${isLight}`}
      />
      <label className='password-toggle-btn' aria-label='Show/hide password'>
        <input type='checkbox' className='password-toggle-check' checked={show} onChange={() => setShow(!show)}/>
        <span className='password-toggle-indicator'></span>
      </label>
    </div>
  )
}

export default PasswordToggle
