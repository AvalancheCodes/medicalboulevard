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
import {
  USER_PROFILE_FIRST_NAME_MINLEN, USER_PROFILE_FIRST_NAME_MAXLEN,
  USER_PROFILE_LAST_NAME_MINLEN, USER_PROFILE_LAST_NAME_MAXLEN,
  USER_PROFILE_PASSWORD_MINLEN
} from "../../utils/constants";

const SignUpModalLight = ({onSwap, pillButtons, ...props}) => {
  const {signUpEmailPassword} = useAuthContext();
  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  );

  const [errorText, setErrorText] = useState(null);
  // Form validation
  const [validated, setValidated] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    setErrorText(null);

    if (form.checkValidity() === false) {
      setErrorText('Invalid input');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorText('Passwords do not match');
      return;
    }
    setIsSubmitDisabled(true);
    signUpEmailPassword(formData.email, formData.password, {
      firstName: formData.firstName,
      lastName: formData.lastName
    })
      .then((uid) => {
        debugger;
        console.log(`User created: ${uid}`);
        props.onHide();
      })
      .catch(e => setErrorText(e.message))
      .finally(() => setIsSubmitDisabled(false));
  }

  const handleChange = (e) => {
    setFormData(curr => ({
      ...curr,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <Modal {...props} className='signup-modal'>
      <Modal.Body className='px-0 py-2 py-sm-0'>
        <CloseButton
          onClick={props.onHide}
          aria-label='Close modal'
          className='position-absolute top-0 end-0 mt-3 me-3'
        />
        <div className='row mx-0 align-items-center'>
          <div className='col-md-6 border-end-md p-4 p-sm-5'>
            <h2 className='h3 mb-4 mb-sm-5'>Join Finder.<br/>Get premium benefits:</h2>
            <ul className='list-unstyled mb-4 mb-sm-5'>
              <li className='d-flex mb-2'>
                <i className='fi-check-circle text-primary mt-1 me-2'></i>
                <span>Add and promote your listings</span>
              </li>
              <li className='d-flex mb-2'>
                <i className='fi-check-circle text-primary mt-1 me-2'></i>
                <span>Easily manage your wishlist</span>
              </li>
              <li className='d-flex mb-0'>
                <i className='fi-check-circle text-primary mt-1 me-2'></i>
                <span>Leave reviews</span>
              </li>
            </ul>
            <div className='d-flex justify-content-center'>
              <ImageLoader
                src='/images/signin-modal/signup.svg'
                width={344}
                height={404}
                alt='Illustration'
              />
            </div>
            <div className='mt-sm-4 pt-md-3'>Already have an account? <a href='#' onClick={onSwap}>Sign in</a></div>
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
            <Form validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId='su-firstName' className='mb-4'>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  placeholder='Enter your first name'
                  name='firstName'
                  value={formData.firstName} onChange={handleChange}
                  minLength={USER_PROFILE_FIRST_NAME_MINLEN}
                  maxLength={USER_PROFILE_FIRST_NAME_MAXLEN}
                  required
                />
              </Form.Group>
              <Form.Group controlId='su-lastName' className='mb-4'>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  placeholder='Enter your last name'
                  name='lastName'
                  value={formData.lastName} onChange={handleChange}
                  minLength={USER_PROFILE_LAST_NAME_MINLEN}
                  maxLength={USER_PROFILE_LAST_NAME_MAXLEN}
                  required
                />
              </Form.Group>
              <Form.Group controlId='su-email' className='mb-4'>
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
                <Form.Label htmlFor='su-password'>
                  Password <span className='fs-sm text-muted'>min. 8 char</span>
                </Form.Label>
                <PasswordToggle
                  id='su-password'
                  name='password'
                  value={formData.password} onChange={handleChange}
                  minLength={USER_PROFILE_PASSWORD_MINLEN}
                  required/>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='su-confirm-password'>Confirm password</Form.Label>
                <PasswordToggle
                  id='su-confirm-password'
                  name='confirmPassword'
                  value={formData.confirmPassword} onChange={handleChange}
                  minLength={USER_PROFILE_PASSWORD_MINLEN}
                  required/>
              </Form.Group>
              <Form.Check
                type='checkbox'
                id='terms-agree'
                label={[
                  <span key={1}>By joining, I agree to the </span>,
                  <Link key={2} href='#'>Terms of use</Link>,
                  <span key={3}> and </span>,
                  <Link key={4} href='#'>Privacy policy</Link>
                ]}
                required
                className='mb-4'
              />
              {errorText && (<Alert variant="danger">{errorText}</Alert>)}
              <Button type='submit' size='lg' variant={`primary ${pillButtons ? 'rounded-pill' : ''} w-100`}
                      disabled={isSubmitDisabled}>
                Sign up
              </Button>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default SignUpModalLight
