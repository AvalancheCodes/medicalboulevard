import IBaseEntity from "./abstractions/IBaseEntity";

export default interface IIconLabelEntity extends IBaseEntity {
  icons: string[];
  label: string;
}
