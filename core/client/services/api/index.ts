import axios from "axios";
import { ApiHireUsService } from "./ApiHireUsService";

const myAxiosInstance = axios.create({
  // baseURL: 'https://example.com/api',
  // headers: { 'X-Custom-Header': 'my-custom-header-value' }
});

const apiHireUsService = new ApiHireUsService(myAxiosInstance);

export {
  apiHireUsService
}
