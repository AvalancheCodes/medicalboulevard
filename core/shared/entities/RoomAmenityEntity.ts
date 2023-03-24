import { IconLabelEntity, IIconLabelEntity } from "./IconLabelEntity";

export interface IRoomAmenityEntity extends IIconLabelEntity {
}


export class RoomAmenityEntity extends IconLabelEntity implements IRoomAmenityEntity {

  constructor(id: string, raw: IRoomAmenityEntity) {
    super(id, raw);
  }
}
