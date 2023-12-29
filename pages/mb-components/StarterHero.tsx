import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScheduleTourButton from "../../components/ScheduleTourButton";
import ImageLoader from "../../components/ImageLoader";

const StarterHero = () => {
    return (
        <Container as='section' className='my-5'>
            <Row className='pt-0 pt-md-2 pt-lg-0'>
                <Col md={7} lg={6} xl={5} className='pt-xl-5 pe-lg-0 mb-3 text-md-start text-center'>
                    <h1 className='display-4 mt-lg-5 mb-md-4 mb-3 pt-md-4 pb-lg-2'>
                        Flexible Medical Room Rentals in Prime Beverly Hills Location
                    </h1>
                    <p className='position-relative lead'>
                        At Medical Boulevard, we provide medical practitioners with flexible and convenient room rental options in
                        prime Beverly Hills. Our ad-hoc medical examination rooms and business rooms, including conference and
                        media rooms, offer a unique opportunity for practitioners to rent rooms that meet their needs.
                    </p>
                    <ScheduleTourButton />
                </Col>
                <Col md={5} lg={6} xl={7} className='mb-4 mb-lg-3'>
                    <ImageLoader
                        src='/images/real-estate/hero-image.png'
                        width={1492}
                        height={1228}
                        alt='Hero image'
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default StarterHero;