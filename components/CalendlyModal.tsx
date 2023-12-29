import Modal, { ModalProps } from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'
import { InlineWidget } from 'react-calendly';

interface IProps extends ModalProps {
  pillButtons?: boolean;
  [key: string]: any;
}
const CalendlyModal = ({ ...props }: IProps) => {
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
  return (
    <>
      <Modal {...props}>
        <Modal.Header>
          <Modal.Title>Schedule a Tour</Modal.Title>
          <CloseButton
            onClick={props.onHide}
            aria-label='Close modal'
            className='position-absolute top-0 end-0 mt-3 me-3'
          />
        </Modal.Header>
        <Modal.Body className='px-0 py-sm-0'>
          <InlineWidget url="https://calendly.com/charmerweb1025/30min" />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CalendlyModal
