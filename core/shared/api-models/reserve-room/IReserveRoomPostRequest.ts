import TimeRange from "../../entities/utils/TimeRange";
import RecurringType from "../../entities/enums/RecurringType";

export interface IReserveRoomPostRequest {
  roomId: string;

  name: string;
  phone: string;
  email: string;

  startDay: string; // YYYY-MM-DD

  timeRange: TimeRange;
  repeat: RecurringType;

  endRepeatDate?: string; // either (or none, based on "repeat" type)
  endRepeatTimes?: number; // either
}
