import { BaseEntity, IBaseEntity } from "./abstractions/BaseEntity";

export interface IBadgeEntity extends IBaseEntity {
  bgColor: string;
  textColor: string;
  text: string;
}

export class BadgeEntity extends BaseEntity implements IBadgeEntity {
  public readonly bgColor: string;
  public readonly textColor: string;
  public readonly text: string;

  constructor(id: string, raw: IBadgeEntity) {
    super(id);
    this.bgColor = raw.bgColor;
    this.textColor = raw.textColor;
    this.text = raw.text;
  }
}
