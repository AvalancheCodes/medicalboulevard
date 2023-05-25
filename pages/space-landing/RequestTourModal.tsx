import { useCallback, useState } from 'react'
import Link from 'next/link'
import Modal, { ModalProps } from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Alert from "react-bootstrap/Alert";
import { ISignUpUserFormData } from "../../core/client/models/ISignUpUserFormData";

interface IProps extends ModalProps {
  pillButtons?: boolean;
  [key: string]: any;
}
const RequestTourModal = ({ ...props }: IProps) => {
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
        <Modal.Body className='px-0 py-2 py-sm-0'>
          <div className='row mx-0 align-items-center'>
            <div className='col-md-12 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5'>
              <Form noValidate>
                <Form.Group controlId='si-name' className='mb-4'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your name'
                    name='name'
                    required
                  />
                </Form.Group>
                <Form.Group controlId='si-telephone' className='mb-4'>
                  <Form.Label>Telephone</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your telephone'
                    name='telephone'
                    required
                  />
                </Form.Group>
                <Form.Group controlId='si-email' className='mb-4'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter your email'
                    name='email'
                    required
                  />
                </Form.Group>

                <Form.Group controlId='si-email' className='mb-4'>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder='Enter your message'
                    name='message'
                    required
                  />
                </Form.Group>
                <Button type='submit' size='lg' variant={`primary w-100`}>
                  REQUEST A TOUR
                </Button>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default RequestTourModal
