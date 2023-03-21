import Container from 'react-bootstrap/Container'
import Image from 'next/image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import HireUsForm from "../../components/partials/HireUsForm";
import ImageLoader from "../../components/ImageLoader";
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import {
  SERVICES_FLEXIBLE_SPACE_AND_SCHEDULING_FEEDBACK_ITEMS,
  SERVICES_FLEXIBLE_SPACE_AND_SCHEDULING_STEPS_ITEMS
} from "../../utils/dummy";
import heroImg from "../../public/images/services/services-rooms-scheduling-hero.png";


const StepItem = ({number, title, description}) => {
  return (
    <div>
      <div className='number-in-circle'>{number.toString()}</div>
      <h1 className='h4 py-2'>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

const QuoteItem = ({quote, authorName, authorJobTitle, authorCompany, authorPhoto}) => {
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0 fw-normal">
          {quote}
        </blockquote>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col xs='auto' className='d-flex flex-column justify-content-center'>
            <ImageLoader src={authorPhoto} width={60} height={60} placeholder={false}
                         className='rounded-circle' alt={authorName}/>
          </Col>
          <Col>
            <p className='py-1 m-0 fw-bold'>{authorName}</p>
            <p className='py-1 m-0'>{authorJobTitle} | {authorCompany}</p>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

const pageTitle = 'Services - Flexible Space and Scheduling';
const activeNav = '/services';
const FlexibleSpaceAndSchedulingPage = () => {
  return (
    <RealEstatePageLayout
      pageTitle={pageTitle}
      activeNav={activeNav}
    >

      <div className='mb-n2' style={{
        background: `linear-gradient(to bottom,
          rgba(169, 137, 120, 0.25)    0%, rgba(169, 137, 120, 0.25)  90%,
          white 0%)`
      }}>
        <Container as='section' className="pt-5 my-5">
          <Row>
            <Col xs={12} md={8}>
              <h1 className='display-3 text-primary'>
                Flexible Space & <span className='text-warning'>Scheduling</span>
              </h1>
              <p className='h3 fw-normal'>
                At Medical Boulevard, we understand that building and growing a medical practice requires more than just
                providing excellent care. With our branding and marketing services, we'll help you stand out from the
                crowd, attract new patients, and build a strong online presence.
              </p>
            </Col>
            <Col xs={12} md={4}>
              <Image src={heroImg} alt="Services Hero img" width="0" height="0" sizes="100vw"/>
            </Col>
          </Row>
        </Container>
      </div>

      <Container as='section' className="pt-5 my-5">
        <Row>
          <Col xs={12} md={6}>
            <h1 className='fs-xs fw-normal'>
              Built to success
            </h1>
            <h2>
              Your Path to Successful Medical Practice: A Roadmap for Branding and Marketing
            </h2>
            <p className='h6 fw-normal'>
              Our Roadmap to Success provides a step-by-step guide for growing your practice. From discovery to
              reporting, we offer the tools and services you need to stand out in a crowded market and attract more
              patients.
            </p>
          </Col>
        </Row>
        <Row className='pt-4'>
          {SERVICES_FLEXIBLE_SPACE_AND_SCHEDULING_STEPS_ITEMS.map((x, i) => (
            <Col xs={6} md={4} key={x.title} className='p-4'>
              <StepItem number={i} title={x.title} description={x.description}/>
            </Col>
          ))}
        </Row>
      </Container>

      <Container as='section' className='p-5 my-5' style={{
        background: "#689EA380"
      }}>
        <Row className='pt-4'>
          <Col className='text-center my-4 pb-3'>
            <h1 className='h4'>
              Discover How We Set You Up For Success - at least <br/>
              three (3) Reasons to Choose Medical Boulevard
            </h1>
          </Col>
        </Row>
        <Row>
          {SERVICES_FLEXIBLE_SPACE_AND_SCHEDULING_FEEDBACK_ITEMS.map((x, i) => (
            <Col xs={6} md={4} key={x.quote}>
              <QuoteItem
                quote={x.quote}
                authorName={x.authorName}
                authorJobTitle={x.authorJobTitle}
                authorCompany={x.authorCompany}
                authorPhoto={x.authorPhoto}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Container as='section' className='pt-5'>
        <Row className='justify-content-center'>
          <Col xs={12} md={6}>
            <HireUsForm/>
          </Col>
        </Row>
      </Container>

    </RealEstatePageLayout>
  )
}

export default FlexibleSpaceAndSchedulingPage
