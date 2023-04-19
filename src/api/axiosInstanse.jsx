import axios from "axios";
import { API_URL } from "../config";
const customAxiosPrivate = axios.create({
  baseURL: API_URL,
  //headers:{ 'Content-Type' : 'application/json'},
  withCredentials: true,
});
customAxiosPrivate.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (((error.response.status === 401) === 400) === 404) {
      window.location = "/login";
    }
    return Promise.reject(error);
  }
);
export default customAxiosPrivate;
