import React from 'react';
import Image from 'next/image'
import happyDoctors from "../public/images/real-estate/happydoctors.png";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from "./NewsletterForm";

const SubscribeHero = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  return (
    <Card className='text-center'>
      <Card.Img
        as={Image}
        src={happyDoctors}
        alt={'Happy Doctors hero image'}
        sizes="100vw" />
      <Card.ImgOverlay
        className={"d-flex flex-column"}
        style={{
          backgroundColor: "rgb(31, 27, 45, 0.4)",
        }}>
        <Container className={"m-auto opacity-0"}>
          <h1 className={"mt-2 mb-2 text-white pt-4"}>
            Join Our Community and Get Exclusive <br />
            Room Rental Offers
          </h1>
          <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={(props) => {
              const { subscribe, status, message } = props || {};
              return (
                <NewsletterForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              );
            }}
          />
          {/* <FormGroup className={"w-50 text-center mx-auto mt-5"}>
            <InputGroup size='sm'>
              <InputGroup.Text className='text-muted'>
                <i className='fi-mail'></i>
              </InputGroup.Text>
              <FormControl placeholder='Your email' />
            </InputGroup>
            <Button variant='primary'>Subscribe</Button>
          </FormGroup> */}
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
}

export default SubscribeHero;
