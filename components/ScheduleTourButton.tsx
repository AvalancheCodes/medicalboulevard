import Button from "react-bootstrap/Button";
import Link from "next/link";

interface IProps {
  className?: string;
}

const ScheduleTourButton = ({ className }: IProps) => {
  // Render markup
  return (
    <Button as={Link as any} href='/real-estate/add-property' size='sm' className={className}>
      <i className='fi-plus me-2'></i>
      Schedule a Tour
    </Button>
  )
}

export default ScheduleTourButton
