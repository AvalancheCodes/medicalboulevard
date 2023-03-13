import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

import ImageLoader from '../components/ImageLoader'
import DropdownSelect from '../components/DropdownSelect'
import IconBox from '../components/IconBox'
import PropertyCardOverlay from '../components/PropertyCardOverlay'
import RealEstatePageLayout from '../components/partials/RealEstatePageLayout'
import ScheduleTourButton from "../components/ScheduleTourButton";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import HowItWorksLineItem from "../components/HowItWorksLineItem";
import SubscribeHero from "../components/SubscribeHero";


const categories = [
  {
    href: '/real-estate/catalog?category=rent',
    media: 'fi-real-estate-house',
    title: 'Examination'
  },
  {
    href: '/real-estate/catalog?category=sale',
    media: 'fi-apartment',
    title: 'SPA Rooms'
  },
  {
    href: '/real-estate/catalog?category=rent',
    media: 'fi-shop',
    title: 'Conference Room'
  },
  {
    href: '/real-estate/catalog?category=rent',
    media: 'fi-rent',
    title: 'Media Room'
  },
  {
    href: '/real-estate/catalog?category=sale',
    media: 'fi-house-chosen',
    title: 'Workspace'
  }
];

const howItWorks = [
  [
    {
      title: "Check Availability",
      text: "To get started, you can check the availability of the medical or business rooms you're interested in renting. Select the specific dates and times for one-time or recurring rentals."
    },
    {
      title: "Book Your Room and Repeat as Needed:",
      text: "Check availability for the desired dates and times for one-time or recurring rentals of our medical and business rooms. Once you find a room that works for you, book it directly through Medical Boulevard and provide payment for the total time you've booked. With upcoming 24-hour availability, you'll have even more flexibility to serve your patients or hold your meetings on your schedule."
    },
    {
      title: "Use It",
      text: "Once your booking is confirmed and payment is received, you can start using your room at the scheduled time. Our rooms are equipped with everything you need to perform your services or hold your meetings, including furniture and sinks required for non-intrusive surgical procedures or other facial treatments. You can focus on your work knowing that all necessary equipment is provided."
    }
  ], [
    {
      title: "Check Availability",
      text: "To get started, you can check the availability of the medical or business rooms you're interested in renting. Select the specific dates and times for one-time or recurring rentals."
    },
    {
      title: "Book Your Room and Repeat as Needed:",
      text: "Check availability for the desired dates and times for one-time or recurring rentals of our medical and business rooms. Once you find a room that works for you, book it directly through Medical Boulevard and provide payment for the total time you've booked. With upcoming 24-hour availability, you'll have even more flexibility to serve your patients or hold your meetings on your schedule."
    },
    {
      title: "Use It",
      text: "Once your booking is confirmed and payment is received, you can start using your room at the scheduled time. Our rooms are equipped with everything you need to perform your services or hold your meetings, including furniture and sinks required for non-intrusive surgical procedures or other facial treatments. You can focus on your work knowing that all necessary equipment is provided."
    },
  ]
]

const IndexPage = () => {
  return (
    <RealEstatePageLayout
      pageTitle='Home'
      activeNav='/'
    >
      {/* Hero */}
      <Container as='section' className='pt-5 my-5'>
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
            <ScheduleTourButton/>
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

      {/* Categories */}
      <Container as='section' className='my-5 py-4'>
        <Row className='g-3 g-xl-4'>
          {categories.map((category, indx) => (
            <Col key={indx} className={"m-0"}>
              <IconBox
                href={category.href}
                media={category.media}
                mediaShape='circle'
                title={category.title}
                type='card-shadow'
                align='center'
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Our Rooms section */}
      <Container as='section' className='my-5 py-4'>
        <div className='d-flex align-items-end align-items-lg-center justify-content-between mb-4 pb-md-2'>
          <div className='d-flex w-100 align-items-center justify-content-between justify-content-lg-start'>
            <h2 className='h3 mb-0 me-md-4'>Our Rooms</h2>

            {/* Dropdown displays on screens < 768px */}
            <DropdownSelect
              defaultValue='Houses'
              options={[
                [null, 'Medical Rooms'],
                [null, 'SPA Rooms'],
                [null, 'Business'],
                [null, 'Desks']
              ]}
              variant='outline-secondary btn-sm'
              className='d-md-none'
            />

            {/* Nav tabs disply on screens > 768px */}
            <Nav
              as='ul'
              variant='tabs'
              defaultActiveKey='houses'
              className='d-none d-md-flex ps-lg-2 mb-0'
            >
              <Nav.Item as='li'>
                <Nav.Link eventKey='medical_rooms' className='fs-sm mb-2 mb-md-0'>Medical Rooms</Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey='spa_rooms' className='fs-sm mb-2 mb-md-0'>SPA Rooms</Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey='business' className='fs-sm mb-2 mb-md-0'>Business</Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey='desks' className='fs-sm mb-2 mb-md-0'>Desks</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <Button as={Link} href='/real-estate/catalog?category=rent' variant='link fw-normal d-none d-lg-block p-0'>
            View all
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>

        {/* Grid of properties */}
        <Row className='g-4'>
          <Col md={6}>
            <PropertyCardOverlay
              img={{
                src: '/images/real-estate/recent/01.jpg',
                alt: 'Background image'
              }}
              href='/real-estate/single-v1'
              title='Luxury Rental Villa'
              category='For rental'
              location='118-11 Sutphin Blvd Jamaica, NY 11434'
              overlay
              badges={[['success', 'Verified'], ['info', 'New']]}
              button={{
                href: '/real-estate/single-v1',
                title: 'From $3,850',
                variant: 'primary',
                wishlistProps: {
                  onClick: () => console.log('You\'ve added Luxury Rental Villa property to your wishlist!')
                }
              }}
              className='h-100'
            />
          </Col>
          <Col md={6}>
            <PropertyCardOverlay
              img={{
                src: '/images/real-estate/recent/02.jpg',
                alt: 'Background image'
              }}
              href='/real-estate/single-v1'
              title='Duplex with Garage'
              category='For sale'
              location='21 Pulaski Road Kings Park, NY 11754'
              overlay
              badges={[['info', 'New']]}
              button={{
                href: '/real-estate/single-v1',
                title: '$200,410',
                variant: 'primary',
                wishlistProps: {
                  onClick: () => console.log('You\'ve added Duplex with Garage property to your wishlist!')
                }
              }}
              className='mb-4'
            />
            <PropertyCardOverlay
              img={{
                src: '/images/real-estate/recent/03.jpg',
                alt: 'Background image'
              }}
              href='/real-estate/single-v1'
              title='Country House'
              category='For sale'
              location='6954 Grand AveMaspeth, NY 11378'
              overlay
              badges={[['info', 'New']]}
              button={{
                href: '/real-estate/single-v1',
                title: '$162,000',
                variant: 'primary',
                wishlistProps: {
                  onClick: () => console.log('You\'ve added Country House property to your wishlist!')
                }
              }}
            />
          </Col>
        </Row>
      </Container>

      {/* How It Works */}
      <Container as='section' className='my-5 py-4'>
        <h2>How it works</h2>
        <Container>
          <Row>
            {howItWorks.map((col, indx1) => (
              <Col key={indx1}>
                {col.map((item, indx2) => (
                  <HowItWorksLineItem key={indx2} number={indx2 + 1} title={item.title} text={item.text}/>
                ))}
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* Subscribe banner */}
      <Container as='section' fluid className='my-5 py-4'>
        <SubscribeHero/>
      </Container>

    </RealEstatePageLayout>
  )
}

export default IndexPage
