import Link from 'next/link'
import ImageLoader from './ImageLoader'
import IRoomEntity from "../core/shared/entities/IRoomEntity";
import BadgeEntityComponent from "./BadgeEntityComponent";
import { ComponentProps } from "react";

interface IProps {
  room: IRoomEntity;
  button: {
    props?: ComponentProps<'button'>,
    wishlistProps?: ComponentProps<'button'>,
    variant: string,
    title: string
  };
  overlay: boolean;

  className?: string;

  [key: string]: any;
}

const PropertyCardOverlay = ({ room, button, overlay, className, ...props }: IProps) => {

  return (
    <div {...props} className={`card border-0 overflow-hidden ${className}`}>
      {overlay && <span className='img-gradient-overlay'></span>}
      {room.mainImageUrl && (
        <ImageLoader src={room.mainImageUrl} layout='fill' objectFit='cover' quality={100} alt={room.name}
                     className='rounded-3'/>
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
          <div className='btn-group ms-n2 ms-sm-0 mt-3'>
            <button
              type='button'
              className={`btn btn-${button.variant ?? "primary"} rounded-end-0 px-3`}
              {...button.props}
            >
              {button.title}
            </button>
            <div className='posiion-relative border-start border-light zindex-5' style={{ marginLeft: '-1px' }}></div>
            <button
              type='button'
              className={`btn btn-${button.variant ?? "primary"} rounded-start-0 px-3`}
              {...button.wishlistProps}
            >
              <i className='fi-heart'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCardOverlay
