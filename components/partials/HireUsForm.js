import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

const HireUsForm = ({className}) => {
  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      projectInfo: "",
      budgetInfo: "",
      companyName: ""
    }
  );

  const [errorText, setErrorText] = useState();
  // Form validation
  const [validated, setValidated] = useState(false)

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

    throw new Error("Not Implemented!");
  }

  const handleChange = (e) => {
    setFormData(curr => ({
      ...curr,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className={className}>
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
            required
          />
        </Col>

        <Col xs={12} md={6} className='py-2'>
          <Form.Control
            aria-label='Last Name'
            placeholder='Last Name'
            id='lastName' name='lastName'
            value={formData.lastName} onChange={handleChange}
            required
          />
        </Col>

        <Col xs={12} className='py-2'>
          <Form.Control
            aria-label='Company Name'
            placeholder='Company Name'
            id='companyName' name='companyName'
            value={formData.companyName} onChange={handleChange}
            required
          />
        </Col>

        <Col xs={12} className='py-2'>
          <Form.Select aria-label='Tell us about your budget'
                       id='budgetInfo' name='budgetInfo'
                       value={formData.budgetInfo} onChange={handleChange}
                       required
          >
            <option defaultValue disabled value=''>Tell us about your budget</option>
            <option value="1000_5000">$1,000 - $5,000</option>
            <option value="5000_10000">$5,000 - $10,000</option>
            <option value="10000_50000">$10,000 - $50,000</option>
            <option value="50000_inf">$50,000+</option>
          </Form.Select>
        </Col>

        <Col xs={12} className='py-2'>
          <Form.Control as="textarea" rows={3}
                        placeholder='Tell us about your project'
                        id='projectInfo' name='projectInfo'
                        value={formData.projectInfo} onChange={handleChange}
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
          <Button type='submit' size='lg' variant='primary' className='w-100'>
            Send inquiry
          </Button>
        </Col>

        <Col xs={12} className='text-center py-2'>
          <p>We'll get back to you in 1-2 business days.</p>
        </Col>

      </Row>
    </Form>
  )
}

export default HireUsForm
