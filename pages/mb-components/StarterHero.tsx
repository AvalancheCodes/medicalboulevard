import React, {useContext, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScheduleTourButton from "../../components/ScheduleTourButton";
import ImageLoader from "../../components/ImageLoader";
import imageUrlBuilder from '@sanity/image-url';
import SanityContext from "../../state/SanityProvider/SanityContext";

const StarterHero = () => {
    const [heroData, setHeroData] = useState(null);
    const client = useContext(SanityContext);

    useEffect(() => {
        const query = `*[_type == "hero"][0]`; // This query fetches the first document of type "hero"
        client.fetch(query)
            .then((data) => {
                setHeroData(data);
            })
            .catch((error) => {
                console.error("Sanity fetch error:", error);
            });
    }, [client]); // Add client to the dependency array

    const imageUrl = heroData?.image?.asset?._ref
        ? imageUrlBuilder(client).image(heroData.image).url()
        : '/images/default-hero-image.png'; // A default or fallback image URL

    return (
        <Container as='section' className='my-5'>
            <Row className='pt-0 pt-md-2 pt-lg-0'>
                <Col md={7} lg={6} xl={5} className='pt-xl-5 pe-lg-0 mb-3 text-md-start text-center'>
                    <h1 className='display-4 mt-lg-5 mb-md-4 mb-3 pt-md-4 pb-lg-2'>
                        {/*Flexible Medical Room Rentals in Prime Beverly Hills Location*/}
                        {heroData?.title}
                    </h1>
                    <p className='position-relative lead'>
                        {heroData?.description}
                    </p>
                    <ScheduleTourButton action_text={heroData?.ctaLabel} />
                </Col>
                <Col md={5} lg={6} xl={7} className='mb-4 mb-lg-3'>
                    <ImageLoader
                        src={imageUrl}
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