import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ImageLoader from '../components/ImageLoader'

import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import useRecentlyViewedRoomsIds from "../hooks/useRecentlyViewedRoomsIds";

import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


import IRoomEntity from "../core/shared/entities/IRoomEntity";
import { firestoreRoomsService } from "../core/client/services/firebase";

interface IRecentlyViewedCardProps {
  room: IRoomEntity,
  className?: string;
}

const RecentlyViewedCard = ({ room, className }: IRecentlyViewedCardProps) => {
  // TODO: Wire IconItems
  const iconItems = useMemo(() => {
    return [
      ["fa-solid fa-house-medical"],
      ["fa-solid fa-sink", "fa-solid fa-sink"],
      ["fa-solid fa-sun"]
    ]
  }, [])
  return (
    <Card className={className}>
      <ImageLoader
        src={room.mainImageUrl}
        width={306}
        height={200}
        layout='responsive'
        alt={room.name}
        className='card-img-top'
      />
      <Card.Body>
        <div>
          <h2 className='fs-xs fw-normal' style={{
            color: "#9371A3"
          }}>{room.category}</h2>
          <h1 className='h6'>{room.name} | {room.sizeSqf.toString()} sq.f</h1>
        </div>

        <div>
          <p className='fs-sm fw-lighter'>{room.descriptionShort}</p>
        </div>

        <div>
          <p className=''>
            <i className="fa-solid fa-money-bills"></i> {room.pricePerHour.toString()} /hr
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


interface IRecentlyViewedProps {
  currentRoomId?: string; // pass it to hide current room from recently viewed
  className?: string;
}

const RecentlyViewed = ({ currentRoomId, className }: IRecentlyViewedProps) => {

  const { items } = useRecentlyViewedRoomsIds();
  const [recentlyViewedRooms, setRecentlyViewedRooms] = useState<IRoomEntity[] | undefined>();

  const roomsIdsToShow = useMemo<string[] | undefined>(() => {
    if (!items) return undefined;
    const filteredRoomsIds = currentRoomId
      ? items.filter(x => x !== currentRoomId)
      : items;

    return filteredRoomsIds.length > 0
      ? filteredRoomsIds
      : undefined;
  }, [items, currentRoomId])

  useEffect(() => {
    if (!roomsIdsToShow || roomsIdsToShow.length === 0) {
      setRecentlyViewedRooms(undefined);
      return;
    }
    Promise.all(roomsIdsToShow.map(id => firestoreRoomsService.getById(id)))
      .then(rooms => setRecentlyViewedRooms(rooms.filter(x => x)))
      .catch(e => {
        console.error(e);
        setRecentlyViewedRooms(undefined);
      });
  }, [roomsIdsToShow])

  if (!recentlyViewedRooms || recentlyViewedRooms.length === 0) return null;

  return (
    <Container fluid as='section' className={className}>
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
              loop={false}
              grabCursor
              slidesPerView={3}
              spaceBetween={30}
            >
              {recentlyViewedRooms?.map(x => (
                <SwiperSlide key={x.slug}>
                  <RecentlyViewedCard room={x}/>
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
