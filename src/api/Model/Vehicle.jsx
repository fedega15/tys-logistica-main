import { customAxios } from "../axiosInstanse";
import { urlGetVehicles,urlAgregar } from "../URLS/urls";

export const getVehicles = async () => {
    return await customAxios.get(urlGetVehicles)
}
export const AgregarCamion = async (vehicleInfo) => {
    console.log(vehicleInfo)
    return await customAxios.post(urlAgregar, vehicleInfo)
}