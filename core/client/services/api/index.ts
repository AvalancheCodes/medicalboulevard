import axios from "axios";
import { ApiHireUsService } from "./ApiHireUsService";
import { ApiReserveRoomService } from "./ApiReserveRoomService";

const myAxiosInstance = axios.create({
  // baseURL: 'https://example.com/api',
  // headers: { 'X-Custom-Header': 'my-custom-header-value' }
});

const apiHireUsService = new ApiHireUsService(myAxiosInstance);
const apiReserveRoomService = new ApiReserveRoomService(myAxiosInstance);

export {
  apiHireUsService,
  apiReserveRoomService
}
