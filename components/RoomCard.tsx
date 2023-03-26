import React, { useMemo } from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import currencyFormatter from "../utils/currencyFormatter";
import { IRoomEntity } from "../core/shared/entities/RoomEntity";
import BadgeEntityComponent from "./BadgeEntityComponent";

interface IProps {
  room: IRoomEntity;
  className?: string;
}

const RoomCard = ({ room, className }: IProps) => {

  const {
    mainImageUrl,
    name,
    descriptionShort,
    sizeSqf,
    category,
    pricePerHour,
    badges,
    slug,
  } = room;

  const priceFormatted = useMemo(() => {
    return currencyFormatter.format(pricePerHour);
  }, [pricePerHour]);

  return (
    <Card className={`card-hover ${className}`}>
      <Card.Img src={mainImageUrl} height={400} width={'auto'} alt={name} className='border-bottom-no-radius'/>
      <Card.ImgOverlay className='d-table'>
        {badges?.map(x => (
          <BadgeEntityComponent key={x.text} badge={x}/>
        ))}
      </Card.ImgOverlay>
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between pb-1'>
          <span className={`fs-sm me-3`}>{category}</span>
        </div>
        <h3 className='h6 mb-1'>{name} | {sizeSqf} sqf</h3>
        <p>{descriptionShort}</p>
        <div className='text-primary fw-bold mb-1'>
          <i className='fi-cash me-1'></i>
          {priceFormatted} /hr
        </div>
      </Card.Body>
      <Card.Footer className='text-end'>
        <Link className='btn btn-outline-primary' href={`rooms/${slug}`}>
          Reserve
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default RoomCard
