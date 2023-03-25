import ImageLoader from "./ImageLoader";
import StarRating from "./StarRating";
import Card from "react-bootstrap/Card";
import React from "react";

export const MedicalSpaceCoordinatorCard = () => {
  return (
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
  )
}
