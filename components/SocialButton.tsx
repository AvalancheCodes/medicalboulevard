interface IProps {
  brand: string;
  variant?: 'solid' | 'translucent' | 'border';
  size?: 'sm' | 'lg' | 'xl';
  roundedCircle?: boolean;
  light?: boolean;
  className?: string;

  [key: string]: any;
}

const SocialButton = ({
                        brand,
                        variant,
                        size,
                        roundedCircle,
                        light,
                        className,
                        ...props
                      }: IProps) => {

  const roundedCircleClass = roundedCircle ? ' rounded-circle' : '';
  const basicLight = light ? ' btn-light' : '';
  const solidLight = light ? ' btn-translucent-light' : ' btn-light-primary';
  const translucentLight = light ? ' btn-translucent-light' : ' btn-translucent-primary';
  const borderLight = light ? ' btn-outline-light border-light' : ' btn-light border';
  const extraClass = className ? ` ${className}` : ''

  // Button size CSS classes
  let btnSize
  switch (size) {
    case 'sm':
      btnSize = ' btn-xxs'
      break
    case 'lg':
      btnSize = ' btn-sm'
      break
    case 'xl':
      btnSize = ''
      break
    default:
      btnSize = ' btn-xs'
  }

  // Icon size CSS classes (for basic variant)
  let iconSize
  switch (size) {
    case 'sm':
      iconSize = ''
      break
    case 'lg':
      iconSize = ' fs-4'
      break
    case 'xl':
      iconSize = ' fs-3'
      break
    default:
      iconSize = ' fs-lg'
  }

  // CSS classes that depend on prop.variant, prop.size, prop.light, prop.className
  let socialButtonClass
  switch (variant) {
    case 'solid':
      socialButtonClass = 'btn btn-icon shadow-sm' + btnSize + roundedCircleClass + solidLight + extraClass
      break
    case 'translucent':
      socialButtonClass = 'btn btn-icon' + btnSize + roundedCircleClass + translucentLight + extraClass
      break
    case 'border':
      socialButtonClass = 'btn btn-icon' + btnSize + roundedCircleClass + borderLight + extraClass
      break
    default:
      socialButtonClass = 'btn btn-link py-1 px-2' + iconSize + basicLight + extraClass
  }

  // Render markup
  return (
    <a {...props} className={socialButtonClass}>
      <i className={`fi-${brand}`}></i>
    </a>
  )
}

export default SocialButton
