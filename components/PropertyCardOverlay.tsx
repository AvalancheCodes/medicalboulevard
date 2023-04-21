import Link from 'next/link'
import ImageLoader from './ImageLoader'
import IRoomEntity from "../core/shared/entities/IRoomEntity";
import BadgeEntityComponent from "./BadgeEntityComponent";
import { ButtonGroup, ButtonProps, CardProps } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

type cleanButtonProps = Omit<ButtonProps, "type" | "className">;

interface IProps extends CardProps {
  room: IRoomEntity;
  button: {
    props?: cleanButtonProps,
    wishlistProps?: Omit<cleanButtonProps, "variant" | "title">,
    variant: string,
    title: string
  };
  overlay: boolean;

  width: string;
  height: string;
  className?: string;

  [key: string]: any;
}

const PropertyCardOverlay = ({ room, button, overlay, width, height, className, ...props }: IProps) => {

  return (
    <Card {...props} className={`rounded overflow-hidden ${className}`} style={{ width: width, height: height }}>
      {overlay && <span className='img-gradient-overlay'></span>}
      {room.mainImageUrl && (
        <ImageLoader
          src={room.mainImageUrl}
          layout='fill'
          objectFit='cover'
          quality={100}
          alt={room.name}
          className='rounded-3'
        />
      )}
      <div className='card-body content-overlay pb-0'>
        {room.badges?.map(x => (
          <BadgeEntityComponent key={x.text} badge={x}/>
        ))}
      </div>
      <div className='card-footer content-overlay border-0 pt-0 pb-4'>
        <div className='d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5'>
          <Link href={`/rooms/${room.slug}`} className='text-decoration-none text-light pe-2'>
            <div className='fs-sm text-uppercase pt-2 mb-1'>{room.category}</div>
            <h3 className='h5 text-light mb-1'>{room.name}</h3>
            <div className='fs-sm opacity-70'>
              <i className='fi-map-pin me-1'></i> {room.excerpt}
            </div>
          </Link>
          <ButtonGroup>
            <Button type="button" variant={button.variant ?? "primary"} {...button.props} className="px-3">
              {button.title}
            </Button>
            <div className="vr" style={{
              zIndex: "10",
              margin: "5% 0",
              color: "rgba(255, 255, 255, 0.2)",
            }}></div>
            <Button type="button" variant={button.variant ?? "primary"}
                    title="Add to Wishlist" {...button.wishlistProps} className="px-3">
              <i className="fi-heart" style={{ marginTop: 0 }}></i>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Card>
  )
}

export default PropertyCardOverlay
