import customAxiosPrivate from "../axiosInstanse";
import { urlGetVehicles, urlAgregar, urlModificar } from "../URLS/urls";

export const getVehicles = async () => {
  return await customAxiosPrivate.get(urlGetVehicles);
};
export const AgregarCamion = async (vehicleInfo) => {
  console.log(vehicleInfo);
  return await customAxiosPrivate.post(urlAgregar, vehicleInfo);
};
export const ModificarCamion = async (vehicleInfo) => {
  console.log(vehicleInfo);
  return await customAxiosPrivate.put(urlModificar, vehicleInfo);
};
