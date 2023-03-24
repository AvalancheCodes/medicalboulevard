import React, { useMemo } from "react";
import currencyFormatter from "../utils/currencyFormatter";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface IProps {
  image: string;
  title: string;
  description: string;
  sizeSqf: number;
  category: string;
  price: number;
  badges: any;
  className?: string;
}

const RoomCard = ({
                    image,
                    title,
                    description,
                    sizeSqf,
                    category,
                    price,
                    badges,
                    className,
                  }: IProps) => {
  const badgesWithType = useMemo(() => {
    // TODO: Ask about other possible badges
    const typesMap = {
      "Furnished": "accent",
      "Furnished2": "accent",
    }
    return badges.map(b => {
      const t = typesMap[b];
      if (!t) console.warn(`Unknown type for Badge '${b}'. Default to 'primary'`);
      return {
        type: t || "primary",
        title: b
      };
    })
  }, [badges])

  const priceFormatted = useMemo(() => {
    return currencyFormatter.format(price);
  }, [price]);

  return (
    <Card className={`card-hover ${className}`}>
      <Card.Img src={image} height={400} width={'auto'} alt={title} className='border-bottom-no-radius'/>
      <Card.ImgOverlay>
        {badgesWithType.map((badge, indx) => (
          <span key={indx} className={`d-table badge bg-${badge.type} mb-1`}>{badge.title}</span>)
        )}
      </Card.ImgOverlay>
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between pb-1'>
          <span className={`fs-sm me-3`}>{category}</span>
        </div>
        <h3 className='h6 mb-1'>{title} | {sizeSqf} sqf</h3>
        <p>{description}</p>
        <div className='text-primary fw-bold mb-1'>
          <i className='fi-cash me-1'></i>
          {priceFormatted}
        </div>
      </Card.Body>
      <Card.Footer className='text-end'>
        <Button variant='outline-primary'>Reserve</Button>
      </Card.Footer>
    </Card>
  )
}

export default RoomCard
