import { customAxios } from "../axiosInstanse";
import { urlGetVehicles } from "../URLS/vehiclesUrl";

export const getVehicles = async () => {
    return await customAxios.get(urlGetVehicles)
}