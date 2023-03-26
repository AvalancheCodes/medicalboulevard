import { BaseEntity, IBaseEntity } from "./abstractions/BaseEntity";
import ICreatedAt from "./abstractions/ICreatedAt";
import { IBadgeEntity } from "./BadgeEntity";

export interface IRoomEntity extends IBaseEntity, ICreatedAt {
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

  createdAtMs: number;
}

export class RoomEntity extends BaseEntity implements IRoomEntity {
  public readonly name: string;
  public readonly slug: string;
  public readonly category: string;
  public readonly type: string;
  public readonly sizeSqf: number;
  public readonly pricePerHour: number;
  public readonly badges: IBadgeEntity[] | undefined;

  public readonly excerpt: string;

  public readonly mainImageUrl: string | undefined;
  public readonly extraImagesUrls: string[] | undefined;

  public readonly descriptionHtml: string;
  public readonly descriptionShort: string;

  public readonly amenitiesIds: string[] | undefined;

  readonly createdAtMs: number;

  constructor(id: string, raw: IRoomEntity) {
    super(id);
    this.name = raw.name;
    this.slug = raw.slug;
    this.category = raw.category;
    this.type = raw.type;
    this.sizeSqf = raw.sizeSqf;
    this.pricePerHour = raw.pricePerHour;
    this.badges = raw.badges;

    this.excerpt = raw.excerpt;

    this.mainImageUrl = raw.mainImageUrl;
    this.extraImagesUrls = raw.extraImagesUrls;

    this.descriptionHtml = raw.descriptionHtml;
    this.descriptionShort = raw.descriptionHtml;

    this.amenitiesIds = raw.amenitiesIds;

    this.createdAtMs = raw.createdAtMs;
  }
}
