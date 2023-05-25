import Modal, { ModalProps } from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'
import styles from "./space.module.css"
interface IProps extends ModalProps {
  pillButtons?: boolean;
  [key: string]: any;
}
const MoreDetailModal = ({ ...props }: IProps) => {
  return (
    <>
      <Modal {...props} className='requesttour-modal'>
        <Modal.Header>
          <Modal.Title>Pencil us in</Modal.Title>
          <CloseButton
            onClick={props.onHide}
            aria-label='Close modal'
            className='position-absolute top-0 end-0 mt-3 me-3'
          />
        </Modal.Header>
        <Modal.Body className='p-4'>
          <div className='row mx-0'>
            <div className='col-md-7'>
              <div className='mb-4'><img src='/images/space-landing/space_landing_welcome_1.png' width="100%"/></div>
              <div><img src='/images/space-landing/space_landing_welcome_3.png'/></div>
            </div>
            <div className='col-md-5'>
              <p className="h3 fw-bold text-primary mb-0">Serenity Room</p>
              <p className='fs-6'><i>price. $250/hr</i></p>
              <p>
                <span className='fw-bold fs-5'>Overview</span><br/>
                <span>Medical Examination Room Sq. FT 95SqFt</span>
              </p>
              <p><span>Elevate your patient care in our spacious, sunlit Serenity Suite, thoughtfully designed for medical professionals. Benefit from the room's well-equipped layout, tailored to support seamless consultations and procedures in a serene environment.</span></p>
              <p>
                <span className='fw-bold fs-5'>Feature</span><br/>
                <span>Double Sink</span><br/>
                <span>Secured Medicine Cabinets</span><br/>
                <span>Natural Light</span><br/>
                <span>Welcoming Reception</span><br/>
                <span>Breakroom</span><br/>
                <span>Lockers & Storage</span><br/>
                <span>High Speed WiFI</span><br/>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MoreDetailModal
