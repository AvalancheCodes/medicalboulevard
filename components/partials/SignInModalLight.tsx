import { useState } from 'react'
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Alert from "react-bootstrap/Alert";
import ImageLoader from '../ImageLoader'
import PasswordToggle from '../PasswordToggle'
import useAuthContext from "../../state/AuthStateProvider/useAuthContext";
import { ISignUpUserFormData } from "../../core/client/models/ISignUpUserFormData";


const SignInModalLight = ({ onSwap, pillButtons, ...props }) => {
  const { loginEmailPassword } = useAuthContext();
  const [formData, setFormData] = useState<ISignUpUserFormData>({ email: "", password: "" });

  const [errorText, setErrorText] = useState<string | null>(null);
  // Form validation
  const [validated, setValidated] = useState<boolean>(false)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);

  const handleSubmit = async (event) => {
    event.preventDefault()
    event.stopPropagation()

    setValidated(true);
    setErrorText(null);
    setIsSubmitDisabled(true);

    const form = event.currentTarget;

    try {
      if (form.checkValidity() === false) throw new Error('Invalid input');
      const creds = await loginEmailPassword(formData.email, formData.password)
      console.log(`User logged in: ${JSON.stringify(creds)}`);
      props.onHide()
    } catch (e) {
      setErrorText(e.message)
    } finally {
      setIsSubmitDisabled(false);
    }

  }

  const handleChange = (e) => {
    setFormData(curr => ({
      ...curr,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <Modal {...props} className='signin-modal'>
      <Modal.Body className='px-0 py-2 py-sm-0'>
        <CloseButton
          onClick={props.onHide}
          aria-label='Close modal'
          className='position-absolute top-0 end-0 mt-3 me-3'
        />
        <div className='row mx-0 align-items-center'>
          <div className='col-md-6 border-end-md p-4 p-sm-5'>
            <h2 className='h3 mb-4 mb-sm-5'>Hey there!<br/>Welcome back.</h2>
            <div className='d-flex justify-content-center'>
              <ImageLoader
                src='/images/signin-modal/signin.svg'
                width={344}
                height={292}
                alt='Illustration'
              />
            </div>
            <div className='mt-4 mt-sm-5'>Don&apos;t have an account? <a href='#' onClick={onSwap}>Sign up here</a>
            </div>
          </div>
          <div className='col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5'>
            <Button variant={`outline-info ${pillButtons ? 'rounded-pill' : ''} w-100 mb-3`}>
              <i className='fi-google fs-lg me-1'></i>
              Sign in with Google
            </Button>
            <Button variant={`outline-info ${pillButtons ? 'rounded-pill' : ''} w-100 mb-3`}>
              <i className='fi-facebook fs-lg me-1'></i>
              Sign in with Facebook
            </Button>
            <div className='d-flex align-items-center py-3 mb-3'>
              <hr className='w-100'/>
              <div className='px-3'>Or</div>
              <hr className='w-100'/>
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId='si-email' className='mb-4'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter your email'
                  name='email'
                  value={formData.email} onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-4'>
                <div className='d-flex align-items-center justify-content-between mb-2'>
                  <Form.Label htmlFor='si-password' className='mb-0'>Password</Form.Label>
                  <Link href='#' className='fs-sm'>Forgot password?</Link>
                </div>
                <PasswordToggle
                  id='si-password'
                  placeholder='Enter password'
                  name='password'
                  value={formData.password} onChange={handleChange}
                  required/>
              </Form.Group>
              {errorText && (<Alert variant="danger">{errorText}</Alert>)}
              <Button type='submit' size='lg' variant={`primary ${pillButtons ? 'rounded-pill' : ''} w-100`}
                      disabled={isSubmitDisabled}>
                Sign in
              </Button>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default SignInModalLight
