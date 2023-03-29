import Image from "next/image";
import Card from "react-bootstrap/Card";
import StarRating from "./StarRating";
import MedicalSpaceCoordinatorEntity from "../core/shared/entities/IMedicalSpaceCoordinatorEntity";
import { EntityWithId } from "../core/shared/entities/utils/EntityWithId";


interface IProps {
  coordinator: EntityWithId<MedicalSpaceCoordinatorEntity>;
  className?: string;
}

export const MedicalSpaceCoordinatorCard = ({ coordinator, className }: IProps) => {

  const rating5 = (coordinator.rating * 5) / 100;

  return (
    <Card className={`card-horizontal ${className}`}>
      <div className='card-img-top'>
        <Image
          src={coordinator.photoUrl}
          width={500}
          height={1000}
          alt={coordinator.fullName}
        />
      </div>
      <div className='d-flex flex-column justify-content-between px-4 py-2'>
        <blockquote className='blockquote h6 fw-normal'>
          {coordinator.about}
        </blockquote>
        <div>
          <div className='d-flex flex-row justify-content-between'>
            <h1 className='h6 m-0'>{coordinator.fullName}</h1>
            <StarRating rating={rating5}/>
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
