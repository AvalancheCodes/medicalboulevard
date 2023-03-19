import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import {
  HIRE_US_BUDGET_OPTIONS,
  HIRE_US_COMPANY_NAME_MINLEN, HIRE_US_COMPANY_NAME_MAXLEN,
  HIRE_US_FIRST_NAME_MINLEN, HIRE_US_FIRST_NAME_MAXLEN,
  HIRE_US_LAST_NAME_MINLEN, HIRE_US_LAST_NAME_MAXLEN,
  HIRE_US_PROJECT_INFO_MINLEN, HIRE_US_PROJECT_INFO_MAXLEN
} from "../../utils/constants";
import { hireUsService } from "../../services/firebase";
import Toast from "react-bootstrap/Toast";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  projectInfo: "",
  budget: "",
  companyName: ""
}

const HireUsForm = ({className}) => {
  const [show, setShow] = useState(false)

  const [formData, setFormData] = useState({...initialFormData});

  const [errorText, setErrorText] = useState();
  // Form validation
  const [validated, setValidated] = useState(false)
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
    // TODO: Add ReCaptcha to the form!
    setIsSubmitDisabled(true)
    hireUsService.sendHireUsRequest({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      companyName: formData.companyName,
      budget: formData.budget,
      projectInfo: formData.budget
    })
      .then(() => {
        setFormData({...initialFormData});
        setShow(true);
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
    <>
      <Toast show={show} onClose={() => setShow(false)}>
        <Toast.Header closeVariant='white' className='bg-primary text-white'>
          <i className='fi-bell me-2'></i>
          <span className='fw-bold me-auto'>Thank you</span>
        </Toast.Header>
        <Toast.Body className='text-primary'>
          We will contact you shortly for further discussion.
        </Toast.Body>
      </Toast>

      <Form validated={validated} onSubmit={handleSubmit} className={className}>
        <Row>
          <Col xs={12} className='text-center py-3'>
            <h1 className='h3'>Ready to hire us?</h1>
            <h2 className='h6'>Tell us your story and we’ll be in touch.</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className='py-2'>
            <Form.Control
              aria-label='First Name'
              placeholder='First Name'
              id='firstName' name='firstName'
              value={formData.firstName} onChange={handleChange}
              minLength={HIRE_US_FIRST_NAME_MINLEN}
              maxLength={HIRE_US_FIRST_NAME_MAXLEN}
              required
            />
          </Col>

          <Col xs={12} md={6} className='py-2'>
            <Form.Control
              aria-label='Last Name'
              placeholder='Last Name'
              id='lastName' name='lastName'
              value={formData.lastName} onChange={handleChange}
              minLength={HIRE_US_LAST_NAME_MINLEN}
              maxLength={HIRE_US_LAST_NAME_MAXLEN}
              required
            />
          </Col>

          <Col xs={12} className='py-2'>
            <Form.Control
              type='email'
              aria-label='Email'
              placeholder='Email'
              id='email' name='email'
              value={formData.email} onChange={handleChange}
              required
            />
          </Col>

          <Col xs={12} className='py-2'>
            <Form.Control
              aria-label='Company Name'
              placeholder='Company Name'
              id='companyName' name='companyName'
              value={formData.companyName} onChange={handleChange}
              minLength={HIRE_US_COMPANY_NAME_MINLEN}
              maxLength={HIRE_US_COMPANY_NAME_MAXLEN}
              required
            />
          </Col>

          <Col xs={12} className='py-2'>
            <Form.Select aria-label='Tell us about your budget'
                         id='budget' name='budget'
                         value={formData.budget} onChange={handleChange}
                         required
            >
              <option defaultValue disabled value=''>Tell us about your budget</option>
              {HIRE_US_BUDGET_OPTIONS.map(x => (
                <option key={x.value} value={x.value}>{x.label}</option>
              ))}
            </Form.Select>
          </Col>

          <Col xs={12} className='py-2'>
            <Form.Control as="textarea" rows={3}
                          placeholder='Tell us about your project'
                          id='projectInfo' name='projectInfo'
                          value={formData.projectInfo} onChange={handleChange}
                          minLength={HIRE_US_PROJECT_INFO_MINLEN}
                          maxLength={HIRE_US_PROJECT_INFO_MAXLEN}
                          required
            />
          </Col>

          <Col xs={12} className='py-2'>
            <Form.Check
              type='checkbox'
              id='terms-agree' name='terms-agree'
              label={[
                <span key={1}>By submitting this form I have read and acknowledged the </span>,
                <Link key={2} href='#'>Privacy policy</Link>
              ]}
              required
              className='mb-4'
            />
          </Col>

          {errorText && (
            <Col xs={12} className='py-2'>
              <Alert variant="danger">{errorText}</Alert>
            </Col>
          )}

          <Col xs={12} className='text-center py-2'>
            <Button type='submit' size='lg' variant='primary' className='w-100' disabled={isSubmitDisabled}>
              Send inquiry
            </Button>
          </Col>

          <Col xs={12} className='text-center py-2'>
            <p>We'll get back to you in 1-2 business days.</p>
          </Col>

        </Row>
      </Form>
    </>
  )
}

export default HireUsForm;
