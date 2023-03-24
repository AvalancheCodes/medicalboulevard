import { BaseEntity } from "./abstractions/BaseEntity";

export interface IIconLabelEntity {
  icon: string;
  label: string;
}

export class IconLabelEntity extends BaseEntity implements IIconLabelEntity {
  public readonly icon: string;
  public readonly label: string;

  constructor(id: string, raw: IIconLabelEntity) {
    super(id);
    this.icon = raw.icon;
    this.label = raw.label;
  }
}
