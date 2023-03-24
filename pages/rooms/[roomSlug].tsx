import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import StarRating from "../../components/StarRating";
import ImageLoader from "../../components/ImageLoader";
import RecentlyViewed from "../../components/RecentlyViewed";
import SanitizedHtml from "../../components/SanitizedHtml";

import { IRoomEntity } from "../../core/shared/entities/RoomEntity";
import { RoomAmenityEntity } from "../../core/shared/entities/RoomAmenityEntity";
import moment from "moment";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import amenities from "../../data/amenities.json";
import { ROOMS } from "../../utils/dummy";

interface IProps {
  room: IRoomEntity;
}

const SlidesCount = ({ currentSlide, totalSlides }) => (
  <div className='swiper-slides-count text-light'>
    <i className='fi-image fs-lg me-2'></i>
    <div className='fs-5 fw-bold ps-1'>
      <span>{currentSlide}</span>
      <span>/</span>
      <span>{totalSlides}</span>
    </div>
  </div>
)

const MedicalRoomIdPage = ({ room }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>();
  const [totalSlides, setTotalSlides] = useState<number>();

  const allAmenities = useMemo<RoomAmenityEntity[]>(() => amenities.map(x => new RoomAmenityEntity(x.id, x)), []);
  const roomAmenities = useMemo<RoomAmenityEntity[] | undefined>(() => {
    if (!room.amenitiesIds) return undefined;
    return allAmenities.filter(x => room.amenitiesIds.includes(x.id))
  }, [room, allAmenities]);

  const notIncludedAmenities = useMemo<RoomAmenityEntity[] | undefined>(() => {
    if (!room.amenitiesIds) return undefined;
    return allAmenities.filter(x => !room.amenitiesIds.includes(x.id));
  }, [room, allAmenities]);

  const allImages = useMemo<string[] | undefined>(() => {
    if (!room.mainImageUrl) return undefined;
    if (room.extraImagesUrls) return [room.mainImageUrl, ...room.extraImagesUrls];
    return [room.mainImageUrl];
  }, [room]);

  const publicationDateString = useMemo<string>(() => {
    if (!room.createdAtMs) return "none";
    return moment(room.createdAtMs).format('MMM D, YYYY');
  }, [room])


  const roomDetails = useMemo(() => {
    return [
      { title: "Type", text: "medical examination room" },
      { title: "Area", text: `${room.sizeSqf} sq.f` },
      { title: "Total hours", text: "4" },
      { title: "Start Date", text: "14/02/2023" },
      { title: "End Date", text: "14/02/2023" },
      { title: "Guests/patients", text: "3" },
      { title: "Parking Validation", text: "1 car" },
    ]
  }, [room])

  useEffect(() => {
    console.log(room);
  }, [room])

  const swiperOnSlideChange = useCallback((swiper: SwiperClass) => {
    setCurrentSlide(swiper.realIndex + 1)
  }, []);

  const swiperOnInit = useCallback((swiper: SwiperClass) => {
    setCurrentSlide(swiper.realIndex + 1)
    setTotalSlides(swiper.slides.length - 2)
  }, [])

  return (
    <RealEstatePageLayout
      pageTitle={`Medical Rooms - ${room.name}`}
      activeNav={`/rooms/${room.slug}`}
    >
      <Container as='section' className="my-5">
        <Row>
          <Col>
            <Breadcrumb className='mb-4 pt-md-3'>
              <Breadcrumb.Item linkAs={Link} href='/'>Home</Breadcrumb.Item>
              <Breadcrumb.Item linkAs={Link} href='/rooms'>Medical Rooms</Breadcrumb.Item>
              <Breadcrumb.Item active>{room.name}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>

          <Col xs={8}>

            {allImages && allImages.length > 0 && (
              <Container className='position-relative'>
                <Swiper
                  modules={[Navigation, Pagination]}
                  onSlideChange={swiperOnSlideChange}
                  onInit={swiperOnInit}
                  pagination={{
                    el: '.swiper-thumbnails',
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `
                        <li class='swiper-thumbnail ${className}'>
                          <img src='${allImages[index]}' alt='Thumbnail'>
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
                  {allImages.map(x => (
                    <SwiperSlide className='d-flex' key={x}>
                      <ImageLoader className='rounded-3' src={x} width={1120} height={630} alt='Image'/>
                    </SwiperSlide>
                  ))}
                  <SlidesCount currentSlide={currentSlide} totalSlides={totalSlides}/>
                </Swiper>

                <ul className='swiper-thumbnails'></ul>
              </Container>
            )}


            <Container className='my-4'>
              <Row>
                <Col>
                  <h1>{room.name}</h1>
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
                        &nbsp;{room.sizeSqf} sq.f
                      </p>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Container>

            <Container className='my-4'>
              <Row>
                <Col>
                  <SanitizedHtml html={room.descriptionHtml}/>
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
                  {room.badges?.map((x) => (
                    <Badge key={x.text} bg="" className={'me-1'} style={{
                      backgroundColor: x.bgColor,
                      color: x.textColor
                    }}>
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

              {roomAmenities && roomAmenities.length > 0 && (
                <>
                  <Row className='my-4'>

                    <Col xs={12}>
                      <h1 className='h5 mb-1'>Amenities</h1>
                    </Col>

                    {roomAmenities.map(x => (
                      <Col xs={12} md={6} key={x.id} className='my-2'>
                        <i className={x.icon}></i>&nbsp;
                        {x.label}
                      </Col>
                    ))}

                  </Row>

                  {notIncludedAmenities && notIncludedAmenities.length > 0 && (
                    <Row className='my-4'>
                      <Col xs={12}>
                        <h1 className='h5 mb-1'>Not Included</h1>
                      </Col>

                      {notIncludedAmenities.map(x => (
                        <Col xs={12} md={6} key={x.id} className='my-2'>
                          <i className={x.icon}></i>&nbsp;
                          {x.label}
                        </Col>
                      ))}
                    </Row>
                  )}

                </>
              )}


              <Row className='mt-4 fs-xxs'>
                <Col xs={12} md={4}>
                  <p className='mb-0'>
                    Published:&nbsp;
                    <span className='fw-bold'>{publicationDateString}</span>
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
    params: { roomSlug: room.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  console.log("Room slug: ", params.roomSlug)
  const room = ROOMS.find(x => x.slug = params.roomSlug);
  // Pass post data to the page via props
  return { props: { room: room } }
}

export default MedicalRoomIdPage
