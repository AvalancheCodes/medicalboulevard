import Image from 'next/image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import { SERVICE_FEATURES } from "../../utils/dummy";
import greetingImg from "../../public/images/services/receptionest-greeting-1.png";

const FeatureItem = ({img, title, description, liLines}) => {
  return (
    <div>
      <div>
        <Image src={img} alt={title} width="65px" height="65px"/>
      </div>
      <div className='pt-1'>
        <h1 className='h3'>{title}</h1>
        <p>{description}</p>
        {liLines?.length > 0 && (
          <ul className="list-group">
            {liLines.map(x => (
              <li className="list-group-item d-flex flex-row" key={x}>
                <div className='pe-2'>
                  <i className="fi-check text-success"></i>
                </div>
                {x}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

const pageTitle = 'Services';
const activeNav = '/services';
const HomePage = () => {
  return (
    <RealEstatePageLayout
      pageTitle={pageTitle}
      activeNav={activeNav}
    >

      <Container as='section' className="pt-5 my-5 text-center">
        <h1 className={'display-3 text-primary'}>
          Empowering your medical practice with exceptional <span className='text-warning'>support</span>
        </h1>
        <h2 className='h4 fw-light'>
          Our mission is to provide fully equipped medical examination rooms and comprehensive support services to

          optimise medical professionals&rsquo; time with patients.

          optimise medical professionals&apos; time with patients.

        </h2>
      </Container>

      <Container fluid as='section' className="pt-5 px-0">
        <Image src={greetingImg} alt="Greeting img" width="0" height="0" sizes="100vw"/>
      </Container>

      <Container as='section' className='pt-5'>
        <div className='text-center'>
          <h1 className='h2'> What we do? </h1>
          <h2 className='h6 fw-lighter'> We provide services that will boost your customer management. </h2>
        </div>

        <Row className='pt-4'>
          {SERVICE_FEATURES.map(x => (
            <Col xs={6} md={4} key={x.title} className='my-3'>
              <FeatureItem title={x.title} description={x.description} img={x.img} liLines={x.liLines}/>
            </Col>
          ))}
        </Row>
      </Container>

    </RealEstatePageLayout>
  )
}

export default HomePage
