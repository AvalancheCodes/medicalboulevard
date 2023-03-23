import { BaseEntity, IBaseEntity } from "./BaseEntity";
import { TimestampCommon } from "./utils/TimestampCommon";

export interface IUserProfileEntity extends IBaseEntity {
  firstName: string;
  lastName: string;
  createdAt: TimestampCommon;
}

export class UserProfileEntity extends BaseEntity implements IUserProfileEntity {
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly createdAt: TimestampCommon;

  constructor(id: string, raw: IUserProfileEntity) {
    super(id);
    this.firstName = raw.firstName;
    this.lastName = raw.lastName;
    this.createdAt = raw.createdAt;
  }
}
