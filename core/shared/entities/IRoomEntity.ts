import IBaseEntity from "./abstractions/IBaseEntity";
import ICreatedAt from "./abstractions/ICreatedAt";
import IBadgeEntity from "./IBadgeEntity";

export default interface IRoomEntity extends IBaseEntity, ICreatedAt {
  name: string;
  slug: string;
  category: string;
  type: string;
  sizeSqf: number;
  pricePerHour: number;
  badges?: IBadgeEntity[];

  excerpt: string;

  mainImageUrl?: string;
  extraImagesUrls?: string[];

  descriptionHtml: string;
  descriptionShort: string;

  amenitiesIds?: string[];

  medicalSpaceCoordinatorId: string;

  createdAtMs: number;
}
