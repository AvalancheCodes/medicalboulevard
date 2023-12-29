import IBaseEntity from "./abstractions/IBaseEntity";
import ICreatedAt from "./abstractions/ICreatedAt";
import IBadgeEntity from "./IBadgeEntity";

interface IRentalDetails {
  hourlyRent: number;
  type: string;
  area: number;
  totalHours: number;
  startDate: string;
  endDate: string;
  guests: number;
  parkingValidation: number;

  // Calculated property
  totalRent: number;
}

export default interface IRoomEntity extends IBaseEntity, ICreatedAt {
  name: string;
  slug: string;
  category: string;
  type: string;
  sizeSqf: number;
  pricePerHour: number;
  badges?: IBadgeEntity[];

  excerpt: string;

  hasSink?: boolean;
  hasDoubleSink?:boolean;
  gearDescription?: string;
  hasNaturalLight?:boolean;

  mainImageUrl?: string;
  extraImagesUrls?: string[];

  descriptionHtml: string;
  descriptionShort: string;

  amenitiesIds?: string[];

  medicalSpaceCoordinatorId: string;

  createdAtMs: number;

  rentalDetails?:IRentalDetails;
}
