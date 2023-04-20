import IBaseEntity from "./abstractions/IBaseEntity";

export default interface IRentRoomRequestEntity extends IBaseEntity {
  /**
   * Day + hoursStart
   */
  startDateMs: number;


}
