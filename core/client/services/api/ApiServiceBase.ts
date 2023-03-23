import { AxiosInstance, isAxiosError } from "axios";

interface IApiServiceBase {

}

export abstract class ApiServiceBase implements IApiServiceBase {
  protected readonly _http: AxiosInstance;

  protected constructor(http: AxiosInstance) {
    this._http = http
  }

  protected GetAxiosErrorMessage(error: Error): string {
    if (isAxiosError(error)) {
      // Axios error (HTTP error)
      const errorResponse = error.response;
      if (errorResponse) {
        return `HTTP error: ${errorResponse.status} - ${errorResponse.data}`;
      } else {
        return `HTTP error: ${error.message}`;
      }
    } else {
      // Network error
      return `Network error: ${error.message}`;
    }
  }
}
