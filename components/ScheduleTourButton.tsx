import Button from "react-bootstrap/Button";
import Link from "next/link";
import { PopupModal } from 'react-calendly';
import { useState } from "react";

interface IProps {
  className?: string;

}

const ScheduleTourButton = ({ className }: IProps) => {
  var pageSettings = {
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '00a2ff',
    textColor: '4d5055'
  }
  var utm = {
    utmCampaign: 'Spring Sale 2019',
    utmContent: 'Shoe and Shirts',
    utmMedium: 'Ad',
    utmSource: 'Facebook',
    utmTerm: 'Spring'
  }
  const [isOpen, setIsOpen] = useState(false);

  const openCalendlyModal = () => {
    setIsOpen(true);
  }
  // Render markup
  // if (typeof document !== 'undefined') {
    return (
      <>
      {/* <Button as={Link as any} href='/real-estate/add-property' size='sm' className={className} onClick={openCalendlyModal}>
        <i className='fi-plus me-2'></i>
        Schedule a Tour
      </Button> */}
      <Button size='sm' className={className} onClick={openCalendlyModal}>
        <i className='fi-plus me-2'></i>
        Schedule a Tour
      </Button>
      <PopupModal
          url="https://calendly.com/charmerweb1025/30min"
          // pageSettings={pageSettings}
          // utm={utm}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementById("__next")}
        />
      </>
    )
  // }
}

export default ScheduleTourButton
