import React, { useMemo } from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RecurringType } from "../utils/RecurringType";

const RoomTypesFilter = ({className}) => {
  const roomTypes = useMemo(() => {
    return [
      {id: "examination", label: "Examination Room"},
      {id: "conference", label: "Conference Room"},
      {id: "office-desk", label: "Office Desk"},
      {id: "video-conference", label: "Video Conference"},
      {id: "social-media-station", label: "Social Media Station"},
      {id: "land", label: "Land"}
    ]
  }, [])

  return (
    <Container className={className}>
      <Row>
        <Form.Label><h3>Room Type</h3></Form.Label>
        <Col>
          {roomTypes.map(item => (
            <Form.Check type='checkbox' key={item.id} id={item.id} name={`${item.id}-checkbox`} label={item.label}/>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

const SelectDayFilter = ({className}) => {
  return (
    <Container className={className}>
      <Row>
        <Form.Label><h3>Select Day</h3></Form.Label>
        <Col xs={12} md={12} lg={12} xl={6}>
          <Form.Label>First Day</Form.Label>
          <Form.Control type="date" name="start-day" placeholder="Select a Start Day"/>
        </Col>
        <Col xs={12} md={12} lg={12} xl={6}>
          <Form.Label>Hours</Form.Label>
          <Form.Select defaultValue='default'>
            <option value='default' disabled>Choose option...</option>
            <option value='1'>Option item 1</option>
            <option value='2'>Option item 2</option>
            <option value='3'>Option item 3</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  )
}

const RepeatFilters = ({className}) => {

  const repeatOptions = useMemo(() => {
    return [
      {id: RecurringType.None, label: "None"},
      {id: RecurringType.EveryDay, label: "Every Day"},
      {id: RecurringType.EveryWeek, label: "Every Week"},
      {id: RecurringType.EveryMonth, label: "Every Month"},
    ]
  }, [])

  return (
    <Container className={className}>
      <Row>
        <Col xs={'auto'}>
          <Form.Label>Repeat</Form.Label>
          {repeatOptions.map(item => (
            <Form.Check type='radio' key={item.id} id={item.id} name='repeat-radio' label={item.label}/>
          ))}
        </Col>
        <Col xs={'auto'}>
          <Form.Label>End Repeat</Form.Label>
          <Row className='justify-content-between'>
            <Col xs={'auto'} className="d-flex p-r-0">
              <Form.Check className="my-auto" type='radio' id="on-date" name='repeat-end-radio' label="On Date"/>
            </Col>
            <Col xs={'auto'} className="d-flex">
              <Form.Control
                style={{
                  width: '18ch'
                }}
                className="my-auto" type="date" size='sm' name="repeat-end-date"
                placeholder="Select a Start Day"/>
            </Col>
          </Row>
          <Row className="mt-2 justify-content-between">
            <Col xs={'auto'} className="d-flex p-r-0">
              <Form.Check className="my-auto" type='radio' id="after-date" name='repeat-end-radio' label="After"/>
            </Col>
            <Col xs={'auto'} className="d-flex">
              <Form.Control
                style={{
                  paddingLeft: '0.7rem',
                  width: '7ch'
                }}
                className="my-auto p-r-0" type="number" size='sm' placeholder=''/>
              <span className="my-auto">&nbsp;times</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

const FindReservationFilters = ({className}) => {
  return (
    <Card className={className}>
      <Card.Body>
        <Card.Title>Find your Reservation</Card.Title>
        <Form noValidate>
          <RoomTypesFilter className="my-4"/>
          <SelectDayFilter className="my-4"/>
          <RepeatFilters className="my-4"/>
        </Form>
      </Card.Body>
    </Card>
  );
}


export default FindReservationFilters;
