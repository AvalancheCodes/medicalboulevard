import { ApiServiceBase } from "./ApiServiceBase";
import { AxiosInstance } from "axios";
import trimObjectStrings from "../../../../utils/trimObjectStrings";
import { IReserveRoomPostRequest } from "../../../shared/api-models/reserve-room/IReserveRoomPostRequest";
import { IReserveRoomPostResponse } from "../../../shared/api-models/reserve-room/IReserveRoomPostResponse";

export class ApiReserveRoomService extends ApiServiceBase {
  constructor(http: AxiosInstance) {
    super(http);
  }

  public async PostReserveRoomRequest(data: IReserveRoomPostRequest): Promise<IReserveRoomPostResponse> {
    const trimmedData = trimObjectStrings(data);
    // TODO: Add validation
    //await hireUsPostRequestSchema.validate(trimmedData);

    try {
      const response = await this._http.post<IReserveRoomPostResponse>('/api/reserve-room', trimmedData);
      return response.data;
    } catch (error) {
      const errorMessage = this.GetAxiosErrorMessage(error);
      throw new Error(errorMessage);
    }
  }
}
