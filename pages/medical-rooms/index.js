import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import FindReservationFilters from "../../components/FindReservationFilters";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import Form from 'react-bootstrap/Form'
import RoomCard from "../../components/RoomCard";
import { useMemo } from "react";
import { MEDICAL_ROOMS_PROPERTIES } from "../../utils/dummy";

const pageTitle = 'Medical Rooms';
const activeNav = '/medical-rooms';

const MedicalRoomHeader = () => {
  return (
    <Container fluid as='section'>
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} href='/'>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{pageTitle}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Available Rooms</h1>
        </Col>
      </Row>
      <Row as='form' className='row-cols-sm-auto g-3 align-items-center'>
        <Col xs={12}>
          <Form.Label>
            <i className="fi-arrows-sort fs-base me-2"></i> Sort by:
          </Form.Label>
        </Col>
        <Col xs={12}>
          <Form.Select defaultValue='default'>
            <option value='default' disabled>Room Type</option>
            <option value='1'>Option item 1</option>
            <option value='2'>Option item 2</option>
            <option value='3'>Option item 3</option>
          </Form.Select>
        </Col>
        <Col xs={12} className="flex-grow-1 text-end">
          <i className="fi-clock fs-base me-1"></i> 148 results
        </Col>
      </Row>
    </Container>
  )
}

const HomePage = () => {

  const roomsToShow = useMemo(() => {
    return MEDICAL_ROOMS_PROPERTIES;
  }, [])

  return (
    <RealEstatePageLayout
      pageTitle={pageTitle}
      activeNav={activeNav}
    >
      <Container fluid as='section' className={"pt-5 my-5"}>
        <Row>
          <Col xs={3}>
            <FindReservationFilters/>
          </Col>
          <Col>
            <MedicalRoomHeader/>
            <Container fluid as='section' className='pt-4'>
              <Row>
                {roomsToShow.map(x => (
                  <Col xs={12} md={6} lg={4} key={x.id} className='pb-3'>
                    <RoomCard
                      image={x.image}
                      imageSizes={[400, 200]}
                      category={x.category}
                      title={x.title}
                      sizeSqf={x.sizeSqf}
                      description={x.description}
                      price={x.price}
                      badges={x.badges}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

    </RealEstatePageLayout>
  )
}

export default HomePage
