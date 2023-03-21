import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageLoader from "../../components/ImageLoader";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Card from "react-bootstrap/Card";
import StarRating from "../../components/StarRating";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import RecentlyViewed from "../../components/RecentlyViewed";

const ROOMS = [
  { id: "1", name: "room1" },
  { id: "2", name: "room2" },
  { id: "3", name: "room3" },
]
const thumbnails = [
  '/images/car-finder/single/gallery/th01.jpg',
  '/images/car-finder/single/gallery/th02.jpg',
  '/images/car-finder/single/gallery/th03.jpg',
  '/images/car-finder/single/gallery/th04.jpg',
]

const carsOld = [
  '/images/car-finder/single/gallery/01.jpg',
  '/images/car-finder/single/gallery/02.jpg',
  '/images/car-finder/single/gallery/03.jpg',
  '/images/car-finder/single/gallery/04.jpg',
]

const roomBadges = [
  { type: "primary", text: "Verified" },
  { type: "success", text: "New" },
]

const roomDetails = [
  { title: "Type", text: "medical examination room" },
  { title: "Area", text: "85 sq.f" },
  { title: "Total hours", text: "4" },
  { title: "Start Date", text: "14/02/2023" },
  { title: "End Date", text: "14/02/2023" },
  { title: "Guests/patients", text: "3" },
  { title: "Parking Validation", text: "1 car" },
]

const roomAmenities = [
  { iconClass: "fa-solid fa-wifi", title: "WiFi" },
  { iconClass: "fa-solid fa-couch", title: "Treatment Chair" },
  { iconClass: "fa-solid fa-headset", title: "Welcoming Reception" },
  { iconClass: "fa-solid fa-desktop", title: "Computer Desktop" },
  { iconClass: "fa-solid fa-sun", title: "Ample Natural Light" },
  { iconClass: "fa-solid fa-mug-hot", title: "Break Room" },
  { iconClass: "fa-solid fa-snowflake", title: "Air Conditioning" },
  { iconClass: "fa-solid fa-biohazard", title: "Medical Waste Removal" },
  { iconClass: "fa-solid fa-photo-film", title: "Audio Visual" },
  { iconClass: "fa-solid fa-warehouse", title: "Storage and lockers" },
]

const roomNotIncluded = [
  { iconClass: "fa-solid fa-pills", title: "Medication" },
  { iconClass: "fa-solid fa-radiation", title: "Sterilization equipment" },
  { iconClass: "fa-solid fa-bandage", title: "Medical consumables" },
  { iconClass: "fa-solid fa-stethoscope", title: "Procedure-specific tools" },
  { iconClass: "fa-solid fa-sliders", title: "Customizable furniture" }
]

const MedicalRoomIdPage = ({ room }) => {
  const [currentSlide, setCurrentSlide] = useState<number>();
  const [totalSlides, setTotalSlides] = useState<number>();

  const SlidesCount = () => (
    <div className='swiper-slides-count text-light'>
      <i className='fi-image fs-lg me-2'></i>
      <div className='fs-5 fw-bold ps-1'>
        <span>{currentSlide}</span>
        <span>/</span>
        <span>{totalSlides}</span>
      </div>
    </div>
  )

  useEffect(() => {
    console.log(room)
  }, [])

  return (
    <RealEstatePageLayout
      pageTitle='Medical Rooms'
      activeNav='/medical-rooms'
    >
      <Container as='section' className={"my-5"}>
        <Row>
          <Col>
            <Breadcrumb className='mb-4 pt-md-3'>
              <Breadcrumb.Item linkAs={Link} href='/'>Home</Breadcrumb.Item>
              <Breadcrumb.Item linkAs={Link} href='/medical-rooms#'>Medical Rooms</Breadcrumb.Item>
              <Breadcrumb.Item active>Room X</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>

          <Col xs={8}>
            <Container className='position-relative'>
              <Swiper
                modules={[Navigation, Pagination]}
                onSlideChange={(swiper) => {
                  setCurrentSlide(swiper.realIndex + 1)
                }}
                onInit={(swiper) => {
                  setCurrentSlide(swiper.realIndex + 1)
                  setTotalSlides(swiper.slides.length - 2)
                }}
                pagination={{
                  el: '.swiper-thumbnails',
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `
                        <li class='swiper-thumbnail ${className}'>
                          <img src='${thumbnails[index]}' alt='Thumbnail'>
                        </li>
                        `
                  }
                }}
                navigation
                spaceBetween={12}
                loop
                grabCursor
                className='swiper-nav-onhover rounded-3'
              >
                {carsOld.map(x => (
                  <SwiperSlide className='d-flex' key={x}>
                    <ImageLoader className='rounded-3' src={x} width={1120} height={630} alt='Image'/>
                  </SwiperSlide>
                ))}
                <SlidesCount/>
              </Swiper>

              <ul className='swiper-thumbnails'></ul>
            </Container>

            <Container className='my-4'>
              <Row>
                <Col>
                  <h1>
                    Serenity Room
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <p>
                      <i className='fi-home me-1'></i>
                      &nbsp;Elevate patient care in a spacious, sunlit setting
                    </p>
                    <div className='d-flex flex-row'>
                      <p className='me-4'>
                        <i className="fa-solid fa-sink"></i>
                        <i className="fa-solid fa-sink"></i>
                        &nbsp;Double Sink
                      </p>
                      <p className='me-4'>
                        <i className="fa-solid fa-sun me-1"></i>
                        &nbsp;Natural Light
                      </p>
                      <p className='me-4'>
                        <i className="fa-solid fa-ruler me-1"></i>
                        &nbsp;85 sq.f
                      </p>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Container>

            <Container className='my-4'>
              <Row>
                <Col>
                  <h1>
                    Overview
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Elevate your patient care in our spacious, sunlit Serenity Suite, thoughtfully designed for medical
                    professionals. This inviting atmosphere promotes a sense of comfort and trust, enhancing the overall
                    treatment experience for your patients. Benefit from the room's well-equipped layout, tailored to
                    support seamless consultations and procedures in a serene environment.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Please note: While the Serenity Suite offers a wide range of amenities to support your practice, it
                    does not include specialised medical equipment for specific procedures. Medical professionals are
                    responsible for providing their own specialised tools and instruments as needed.
                  </p>
                </Col>
              </Row>
            </Container>

            <Container className='my-4'>
              <Row>
                <Col>
                  <h1>
                    Medical Space Coordinator
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className='card-horizontal'>
                    <div className='card-img-top'>
                      <ImageLoader
                        src='/images/real-estate/catalog/03.jpg'
                        layout='fill'
                        objectFit='cover'
                        quality={100}
                        alt='Card image'
                      />
                    </div>
                    <div className='d-flex flex-column justify-content-between px-4 py-2'>
                      <blockquote className='blockquote h6 fw-normal'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo.
                      </blockquote>
                      <div>
                        <div className='d-flex flex-row justify-content-between'>
                          <h1 className='h6 m-0'>Kristin Johnson</h1>
                          <StarRating rating={5}/>
                        </div>
                        <div className='d-flex flex-row justify-content-between'>
                          <p className='fw-light mb-0'>Your Trusted Partner in Medical Space Solutions</p>
                          <p className='fw-light mb-0'>24 reviews</p>
                        </div>
                      </div>
                    </div>

                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>

          <Col xs={4}>
            <Container>

              <Row>
                <Col>
                  {roomBadges.map((x) => (
                    <Badge key={x.text} bg={x.type} className={'me-1'}>
                      {x.text}
                    </Badge>
                  ))}
                </Col>
                <Col xs='auto'>
                  {/*<i className={true ? 'fi-heart' : 'fi-heart-filled'}></i>*/}
                  <i className='fi-heart me-1'></i>
                  <i className='fi-share'></i>
                </Col>
              </Row>

              <Row className='my-4'>
                <Col>
                  <h1 className='h5'>Requested period rent</h1>
                  <h2 className='mb-0'>$1,100 <span className='fw-light fs-sm'>/month</span></h2>
                </Col>
              </Row>

              <Row className='p-4'>
                <Col>
                  <h1 className='h5'>Details:</h1>
                  <div>
                    {roomDetails.map(x => (
                      <p key={x.title} className='fw-bold mb-1'>
                        {x.title}: <span className='fw-normal'>{x.text}</span>
                      </p>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className='mt-4'>
                <Col>
                  <Button type='button' variant='primary' className='w-100'>Book a viewing</Button>
                </Col>
              </Row>

              <Row className='mt-2'>
                <Col>
                  <p>
                    <i className='fi-alert-circle lead me-2 me-sm-3'></i>
                    Frequently Asked Questions
                  </p>
                </Col>
              </Row>

              <Row className='my-4'>
                <Col xs={12}>
                  <h1 className='h5 mb-1'>Amenities</h1>
                </Col>

                {roomAmenities.map(x => (
                  <Col xs={12} md={6} key={x.title} className='my-2'>
                    <i className={x.iconClass}></i>&nbsp;
                    {x.title}
                  </Col>
                ))}
              </Row>

              <Row className='my-4'>
                <Col xs={12}>
                  <h1 className='h5 mb-1'>Not Included</h1>
                </Col>

                {roomNotIncluded.map(x => (
                  <Col xs={12} md={6} key={x.title} className='my-2'>
                    <i className={x.iconClass}></i>&nbsp;
                    {x.title}
                  </Col>
                ))}
              </Row>

              <Row className='mt-4 fs-xxs'>
                <Col xs={12} md={4}>
                  <p className='mb-0'>
                    Published:&nbsp;
                    <span className='fw-bold'>Dec 9, 2022</span>
                  </p>
                </Col>
                <Col xs={12} md={4}>
                  <p className='mb-0'>
                    Ad number:&nbsp;
                    <span className='fw-bold'>681013232</span>
                  </p>
                </Col>
                <Col xs={12} md={4}>
                  <p className='mb-0'>
                    Views:&nbsp;
                    <span className='fw-bold'>48</span>
                  </p>
                </Col>
              </Row>

            </Container>
          </Col>

        </Row>
        <Row className='mt-4'>
          <Col>
            <RecentlyViewed/>
          </Col>
        </Row>
      </Container>

    </RealEstatePageLayout>
  )
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = ROOMS.map((room) => ({
    params: { id: room.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  console.log("RoomID: ", params.id)

  // Pass post data to the page via props
  return { props: { room: { id: params.id } } }
}

export default MedicalRoomIdPage
