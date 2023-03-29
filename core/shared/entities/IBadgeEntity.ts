import IBaseEntity from "./abstractions/IBaseEntity";

export default interface IBadgeEntity extends IBaseEntity {
  bgColor: string;
  textColor: string;
  text: string;
}
