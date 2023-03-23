import ImageLoader from '../components/ImageLoader'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const items = [
  {
    id: "1",
    image: "/images/real-estate/catalog/01.jpg",
    category: "Medical Suite",
    name: "Serenity Room",
    sizeSqf: 80,
    description: "Tranquil, Elegant Treatment Space",
    pricePerHour: 500,
    iconItems: [
      ["fa-solid fa-house-medical"],
      ["fa-solid fa-sink", "fa-solid fa-sink"],
      ["fa-solid fa-sun"]
    ]
  },
  {
    id: "2",
    image: "/images/real-estate/catalog/02.jpg",
    category: "Medical Chamber",
    name: "Clarity Chamber",
    sizeSqf: 80,
    description: "Streamlined, Modern Exam Room",
    pricePerHour: 450,
    iconItems: []
  },
  {
    id: "3",
    image: "/images/real-estate/catalog/03.jpg",
    category: "Medical Room",
    name: "Radiance Room",
    sizeSqf: 80,
    description: "Bright, Inviting Consultation Area",
    pricePerHour: 1000,
    iconItems: [
      ["fa-solid fa-house-medical"],
      ["fa-solid fa-sink", "fa-solid fa-sink"],
    ]
  },
  {
    id: "4",
    image: "/images/real-estate/catalog/04.jpg",
    category: "Business Suite",
    name: "Connectivity Corner",
    sizeSqf: 80,
    description: "Efficient Telemedicine & Media",
    pricePerHour: 250,
    iconItems: []
  },
  {
    id: "5",
    image: "/images/real-estate/catalog/05.jpg",
    category: "Medical Room",
    name: "Room X",
    sizeSqf: 80,
    description: "Efficient Telemedicine & Media",
    pricePerHour: 420.20,
    iconItems: []
  },
]

const RecentlyViewedItem = ({ image, category, name, sizeSqf, description, pricePerHour, iconItems }) => {
  return (
    <Card>
      <ImageLoader
        src={image}
        width={306}
        height={200}
        layout='responsive'
        alt={name}
        className='card-img-top'
      />
      <Card.Body>
        <div>
          <h2 className='fs-xs fw-normal' style={{
            color: "#9371A3"
          }}>{category}</h2>
          <h1 className='h6'>{name} | {sizeSqf.toString()} sq.f</h1>
        </div>

        <div>
          <p className='fs-sm fw-lighter'>{description}</p>
        </div>

        <div>
          <p className=''>
            <i className="fa-solid fa-money-bills"></i> {pricePerHour.toString()} /hr
          </p>
        </div>

        <Row className='d-flex flex-row justify-content-between'>
          {iconItems?.map((group, i1) => (
            <Col key={i1} xs={2} md={3} className='text-center'>
              {group?.map((x, i2) => (
                <i key={i2} className={x}></i>
              ))}
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  )
}

const RecentlyViewed = () => {

  return (
    <Container fluid as='section'>
      <Row className="align-items-center my-4">
        <Col>
          <h1 className='mb-0'>
            Recently viewed
          </h1>
        </Col>
        <Col xs='auto'>
          <Button as={Link as any} href='/real-estate/catalog?category=rent' variant='link fw-normal'>
            View all
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Wrapper for keeping external Prev/Next buttons */}
          <div className='position-relative'>

            {/* Swiper slider */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: '#prev',
                nextEl: '#next'
              }}
              pagination={{
                el: '#recently-viewed-pagination',
                clickable: true
              }}
              loop
              grabCursor
              slidesPerView="auto"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 16
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 18
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1100: {
                  slidesPerView: 3,
                  spaceBetween: 24
                }
              }}
            >
              {items.map(x => (
                <SwiperSlide key={x.id}>
                  <RecentlyViewedItem
                    image={x.image}
                    category={x.category}
                    name={x.name}
                    sizeSqf={x.sizeSqf}
                    description={x.description}
                    pricePerHour={x.pricePerHour}
                    iconItems={x.iconItems}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* External light Prev/Next buttons */}
            <Button id='prev' variant='prev btn-light'/>
            <Button id='next' variant='next btn-light'/>
          </div>

          {/* External light pagination (bullets) buttons */}
          <div id='recently-viewed-pagination'
               className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>
        </Col>
      </Row>

    </Container>
  );
}


export default RecentlyViewed;
