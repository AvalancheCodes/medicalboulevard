import { BaseEntity, IBaseEntity } from "./BaseEntity";
import { TimestampCommon } from "./utils/TimestampCommon";

export interface IRoomEntity extends IBaseEntity {
  name: string;
  category: string;
  sizeSqf: number;
  pricePerHour: number;
  mainImageUrl?: string;
  extraImagesUrls?: string[]
  createdAt: TimestampCommon;
}

export class RoomEntity extends BaseEntity implements IRoomEntity {
  public readonly name: string;
  public readonly category: string;
  public readonly sizeSqf: number;
  public readonly pricePerHour: number;

  public readonly mainImageUrl: string | undefined;
  public readonly extraImagesUrls: string[] | undefined;

  public readonly createdAt: TimestampCommon;

  constructor(id: string, raw: IRoomEntity) {
    super(id);
    this.name = raw.name;
    this.category = raw.category;
    this.sizeSqf = raw.sizeSqf;
    this.pricePerHour = raw.pricePerHour;
    this.mainImageUrl = raw.mainImageUrl;
    this.extraImagesUrls = raw.extraImagesUrls;
    this.createdAt = raw.createdAt;
  }
}
