import { ApiServiceBase } from "./ApiServiceBase";
import { AxiosInstance } from "axios";
import trimObjectStrings from "../../../../utils/trimObjectStrings";
import { IHireUsPostResponse } from "../../../shared/api-models/hire-us/IHireUsPostResponse";
import { IHireUsPostRequest } from "../../../shared/api-models/hire-us/IHireUsPostRequest";
import hireUsPostRequestSchema from "../../../shared/yup/hireUsPostRequestSchema";

export class ApiHireUsService extends ApiServiceBase {
  constructor(http: AxiosInstance) {
    super(http);
  }

  public async PostHireUsRequest(data: IHireUsPostRequest): Promise<IHireUsPostResponse> {
    const trimmedData = trimObjectStrings(data);
    await hireUsPostRequestSchema.validate(trimmedData);

    try {
      const response = await this._http.post<IHireUsPostResponse>('/api/hire-us', trimmedData);
      return response.data;
    } catch (error) {
      const errorMessage = this.GetAxiosErrorMessage(error);
      throw new Error(errorMessage);
    }
  }
}
