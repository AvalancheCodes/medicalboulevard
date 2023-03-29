import IBaseEntity from "./abstractions/IBaseEntity";

export default interface IMedicalSpaceCoordinatorEntity extends IBaseEntity {
  fullName: string;
  photoUrl: string;
  about: string;
  // Range 0 - 100
  rating: number;
}
