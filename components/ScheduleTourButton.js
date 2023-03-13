import Button from "react-bootstrap/Button";
import Link from "next/link";

const ScheduleTourButton = ({className}) => {
  // Render markup
  return (
    <Button as={Link} href='/real-estate/add-property' size='sm' className={className}>
      <i className='fi-plus me-2'></i>
      Schedule a Tour
    </Button>
  )
}

export default ScheduleTourButton
