import IBaseEntity from "./abstractions/IBaseEntity";
import ICreatedAt from "./abstractions/ICreatedAt";

export default interface IHireUsRequestEntity extends IBaseEntity, ICreatedAt {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  budget: string;
  projectInfo: string;
  createdAtMs: number;
}
