import IBaseEntity from "./abstractions/IBaseEntity";
import ICreatedAt from "./abstractions/ICreatedAt";

export default interface IUserProfileEntity extends IBaseEntity, ICreatedAt {
  firstName: string;
  lastName: string;
  createdAtMs: number;
}
