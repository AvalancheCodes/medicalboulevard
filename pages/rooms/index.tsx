import { useMemo } from "react";
import Link from "next/link";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Breadcrumb from "react-bootstrap/Breadcrumb";

import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import FindReservationFilters from "../../components/FindReservationFilters";
import RoomCard from "../../components/RoomCard";

import IRoomEntity from "../../core/shared/entities/IRoomEntity";
import { firestoreRoomsService } from "../../core/client/services/firebase";

const pageTitle = 'Medical Rooms';
const activeNav = '/medical-rooms';

const RoomsHeader = () => {
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

interface IProps {
  allRooms: IRoomEntity[];
}

const HomePage = ({ allRooms }: IProps) => {

  const roomsToShow = useMemo(() => {
    return allRooms;
  }, [allRooms])

  return (
    <RealEstatePageLayout
      pageTitle={pageTitle}
      activeNav={activeNav}
    >
      <Container fluid as='section' className="my-5">
        <Row>
          <Col xs={3}>
            <FindReservationFilters/>
          </Col>
          <Col>
            <RoomsHeader/>
            <Container fluid as='section' className='pt-4'>
              <Row>
                {roomsToShow.map(x => (
                  <Col xs={12} md={6} lg={4} key={x.slug} className='pb-3'>
                    <RoomCard room={x}/>
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

export async function getStaticProps() {
  const allRooms = await firestoreRoomsService.getAll();

  return {
    props: {
      allRooms,
    },
  }
}

export default HomePage
