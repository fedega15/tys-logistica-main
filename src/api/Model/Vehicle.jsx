import customAxiosPrivate from "../axiosInstanse";
import { urlGetVehicles, urlAgregar } from "../URLS/urls";

export const getVehicles = async () => {
  return await customAxiosPrivate.get(urlGetVehicles);
};
export const AgregarCamion = async (vehicleInfo) => {
  console.log(vehicleInfo);
  return await customAxiosPrivate.post(urlAgregar, vehicleInfo);
};
