import { useCallback, useMemo, useState } from "react";
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

import ImageLoader from '../components/ImageLoader'
import DropdownSelect from '../components/DropdownSelect'
import PropertyCardOverlay from '../components/PropertyCardOverlay'
import RealEstatePageLayout from '../components/partials/RealEstatePageLayout'
import ScheduleTourButton from "../components/ScheduleTourButton";
import HowItWorksLineItem from "../components/HowItWorksLineItem";
import TeamMember from "../components/TeamMember";

import SubscribeHero from "../components/SubscribeHero";
import ReserveRoomModal from "../components/partials/ReserveRoomModal";
import ReserveRoomThankYouModal from "../components/partials/ReserveRoomThankYouModal";
import { HOMEPAGE_PROCESS_STEPS, ROOMS } from "../utils/dummy";
import IRoomEntity from "../core/shared/entities/IRoomEntity";
import { EntityWithId } from "../core/shared/entities/utils/EntityWithId";
import StarterHero from "./mb-components/StarterHero";
import MicroBlog from "./mb-components/micro-blog";


const roomsCardsSizes = [
  { width: "auto", height: "537px" },
  { width: "auto", height: "253px" }
]
const roomsCategories = [
  { category: "all", title: "all" },
  { category: "medical", title: "Medical Rooms" },
  // { category: "spa", title: "SPA Rooms" },
  { category: "business", title: "Business" },
  // { category: "desks", title: "Desks" },
]
const teams = [
  { name: "Walter White", image: "/images/teams/team-1.jpg", role: "Chief Executive Officer", description: "Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui" },
  { name: "Sarah Jhinson", image: "/images/teams/team-2.jpg", role: "Product Manager", description: "Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus" },
  { name: "William Anderson", image: "/images/teams/team-3.jpg", role: "CTO", description: "Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara" }
];
const roomsCategoriesMobile = roomsCategories.map(x => ({
  icon: null,
  title: x.title,
  value: x.category
}))

const IndexPage = () => {
  const processSteps = HOMEPAGE_PROCESS_STEPS;
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedRoom, setSelectedRoom] = useState<EntityWithId<IRoomEntity> | null>(null);
  const [isThankYouModalVisible, setIsThankYouModalVisible] = useState(false)
  const allRooms = useMemo(() => ROOMS, []);
  const filteredRooms = useMemo(() => {
    if (activeCategory === "all") return allRooms;
    return allRooms.filter(x => x.category === activeCategory);
  }, [activeCategory, allRooms])
  const chunkedRooms = useMemo(() => {
    const sizes = [1, 2, 1];
    const elements = [...filteredRooms];

    return sizes.reduce((acc, size) => {
      const subArray = elements.splice(0, size);
      while (subArray.length < size) {
        subArray.push(null);
      }
      acc.push(subArray);
      return acc;
    }, []);
  }, [filteredRooms])

  const handleReserveRoomModalHide = useCallback(() => {
    setSelectedRoom(null);
    setIsThankYouModalVisible(false);
  }, []);

  const handleReserveRoomModalSubmit = useCallback(() => {
    setSelectedRoom(null);
    setIsThankYouModalVisible(true);
  }, [])

  const handleReserveRoomThankYouModalHide = useCallback(() => {
    setIsThankYouModalVisible(false);
  }, [])

  return (
    <RealEstatePageLayout
      pageTitle='Home'
      activeNav='/'
    >
      {/* Hero */}
      <StarterHero />

      {/* Our Mission */}
      <MicroBlog microBlogId="70e46d96-5e87-450c-b299-5a1456753742" />

      {/* Grid of properties */}
      <Container fluid as='section' className='my-5 py-4'>
        <Container as='section'>
          <div className='d-flex align-items-end align-items-lg-center justify-content-between mb-4 pb-md-2'>
            <div className='d-flex w-100 align-items-center justify-content-between justify-content-lg-start'>
              <h2 className='h3 mb-0 me-md-4'>Our Rooms</h2>

              {/* Dropdown displays on screens < 768px */}
              <DropdownSelect
                options={roomsCategoriesMobile}
                selected={activeCategory}
                setSelected={setActiveCategory}
                variant='outline-secondary btn-sm'
                className='d-md-none'
              />

              {/* Nav tabs display on screens > 768px */}
              <Nav
                as='ul'
                variant='tabs'
                onSelect={setActiveCategory}
                activeKey={activeCategory}
                className='d-none d-md-flex ps-lg-2 mb-0'
              >
                {roomsCategories.map(x => (
                  <Nav.Item as='li' key={x.category}>
                    <Nav.Link eventKey={x.category} className='fs-sm mb-2 mb-md-0'>{x.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>

            <Button as={Link as any} href="/rooms"
              variant='link fw-normal d-none d-lg-block p-0'>
              View all
              <i className='fi-arrow-long-right ms-2'></i>
            </Button>
          </div>
        </Container>

        <Row className='g-4'>
          {chunkedRooms.map((chunk, i) => (
            <Col md={4} key={i} className="d-flex flex-column justify-content-between">
              {chunk.map((room, i2, ch) => (
                room ? <PropertyCardOverlay
                  key={room._id}
                  room={room}
                  overlay
                  button={{
                    title: 'Reserve',
                    variant: 'primary',
                    wishlistProps: {
                      onClick: () => console.log("not implemented")
                    },
                    props: {
                      onClick: () => setSelectedRoom(room)
                    }
                  }}
                  width={roomsCardsSizes[ch.length - 1].width}
                  height={roomsCardsSizes[ch.length - 1].height}
                /> : null
              ))}
            </Col>
          ))}
        </Row>
      </Container>

      {/* How It Works */}
      <Container as='section' className='my-5 py-4'>
        <h3 className="fs-xs fw-bold text-uppercase">
          Built-in access
        </h3>
        <h2>
          Simple 3-Step Process to Rent Your Ideal <br />
          Medical Space
        </h2>
        <p className="fs-lg fw-normal">
          Find the Perfect Space to Elevate Your Practice Today
        </p>
        <div className="mt-4 pt-4">
          <Row>
            {processSteps.map((item, i) => (
              <Col key={i}>
                <HowItWorksLineItem
                  number={i + 1}
                  title={item.title}
                  text={item.text}
                  linkUrl={item.url}
                  linkText={item.urlText}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      {/* Subscribe banner */}
      <Container as='section' fluid className='my-5 py-4'>
        <SubscribeHero />
      </Container>
      <Container as='section' className='my-5 py-4'>
        <h2 className='h1 mb-4 text-center'>Our Teams</h2>
        <Row className='g-4 team'>
          {teams.map((item, i) => (
            <Col md={4} className="text-center" key={item.name}>
              <TeamMember
                image={item.image}
                name={item.name}
                role={item.role}
                description={item.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
      {selectedRoom && !isThankYouModalVisible && (
        <ReserveRoomModal
          show={true}
          onHide={handleReserveRoomModalHide}
          onAfterSubmit={handleReserveRoomModalSubmit}
          room={selectedRoom}
        />
      )}

      {isThankYouModalVisible && (
        <ReserveRoomThankYouModal
          show={true}
          onHide={handleReserveRoomThankYouModalHide}
        />
      )}

    </RealEstatePageLayout>
  )
}

export default IndexPage
