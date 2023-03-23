import { BaseEntity, IBaseEntity } from "./BaseEntity";
import { TimestampCommon } from "./utils/TimestampCommon";

export interface IHireUsRequestEntity extends IBaseEntity {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  budget: string;
  projectInfo: string;
  createdAt: TimestampCommon;
}

export class HireUsRequestEntity extends BaseEntity implements IHireUsRequestEntity {
  public readonly email: string;
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly budget: string;
  public readonly companyName: string;
  public readonly projectInfo: string;
  public readonly createdAt: TimestampCommon;


  constructor(id: string, raw: IHireUsRequestEntity) {
    super(id);
    this.email = raw.email;
    this.firstName = raw.firstName;
    this.lastName = raw.lastName;

    this.budget = raw.budget;
    this.companyName = raw.companyName;
    this.projectInfo = raw.projectInfo;
    this.createdAt = raw.createdAt;
  }
}
