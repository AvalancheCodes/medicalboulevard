import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useState, useCallback } from "react";
import CalendlyModal from "./CalendlyModal";

interface IProps {
  className?: string;
  action_text?: string;
}

const ScheduleTourButton = ({ className, action_text }: IProps) => {

  const [requestTourShow, setRequestTourShow] = useState(false)
  const handleRequestTourShow = () => setRequestTourShow(true)
  const handleRequestTourClose = useCallback(() => setRequestTourShow(false), []);
  // Render markup
  // if (typeof document !== 'undefined') {
    return (
      <>
      <CalendlyModal
        centered
        size='xl'
        show={requestTourShow}
        onHide={handleRequestTourClose}
      />
      {/* <Button as={Link as any} href='/real-estate/add-property' size='sm' className={className} onClick={openCalendlyModal}>
        <i className='fi-plus me-2'></i>
        Schedule a Tour
      </Button> */}
      <Button size='sm' className={className} onClick={handleRequestTourShow}>
        <i className='fi-plus me-2'></i>
        {action_text || "Schedule a Tour"}
      </Button>

      </>
    )
  // }
}

export default ScheduleTourButton
