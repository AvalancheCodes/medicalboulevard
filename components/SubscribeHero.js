import React from 'react';
import Image from 'next/image'
import happyDoctors from "../public/images/real-estate/happydoctors.png";
import Col from "react-bootstrap/Col";
import FormGroup from "./FormGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const SubscribeHero = () => {
  return (
    <Card className='text-center'>
      <Card.Img
        as={Image}
        src={happyDoctors}
        sizes="100vw"/>
      <Card.ImgOverlay
        className={"d-flex flex-column"}
        style={{
          backgroundColor: "rgb(31, 27, 45, 0.4)",
        }}>
        <Container className={"m-auto opacity-0"}>
          <h1 className={"mt-2 mb-2 text-white pt-4"}>
            Join Our Community and Get Exclusive <br/>
            Room Rental Offers
          </h1>
          <FormGroup className={"w-50 text-center mx-auto mt-5"}>
            <InputGroup size='sm'>
              <InputGroup.Text className='text-muted'>
                <i className='fi-mail'></i>
              </InputGroup.Text>
              <FormControl placeholder='Your email'/>
            </InputGroup>
            <Button variant='primary'>Subscribe</Button>
          </FormGroup>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
}

export default SubscribeHero;
