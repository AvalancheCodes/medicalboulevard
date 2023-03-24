import { BaseEntity, IBaseEntity } from "./abstractions/BaseEntity";
import ICreatedAt from "./abstractions/ICreatedAt";

export interface IUserProfileEntity extends IBaseEntity, ICreatedAt {
  firstName: string;
  lastName: string;
  createdAtMs: number;
}

export class UserProfileEntity extends BaseEntity implements IUserProfileEntity {
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly createdAtMs: number;

  constructor(id: string, raw: IUserProfileEntity) {
    super(id);
    this.firstName = raw.firstName;
    this.lastName = raw.lastName;
    this.createdAtMs = raw.createdAtMs;
  }
}
