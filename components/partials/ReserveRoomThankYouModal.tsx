import Modal, { ModalProps } from 'react-bootstrap/Modal'

interface IProps extends Omit<ModalProps, "size"> {
  [key: string]: any;
}

const ReserveRoomThankYouModal = ({ room, ...props }: IProps) => {

  return (
    <Modal size="lg" {...props}>
      <Modal.Header closeButton>
        <Modal.Title>
          Thank You for Your Request
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Thank you for submitting a request to reserve a medical space at Medical Boulevard. We appreciate your
          interest in our services and our team is currently reviewing your request.
        </p>
        <p>
          Our medical space coordinator will be in touch with you soon to confirm your requested dates and answer any
          questions you may have. If you need immediate assistance, please don&apos;t hesitate to contact us directly at
          [insert contact information].
        </p>
        <p className="mb-0">
          Thank you again for considering Medical Boulevard for your medical space needs. We look forward to working
          with you soon.
        </p>
      </Modal.Body>
    </Modal>
  )
}

export default ReserveRoomThankYouModal;
