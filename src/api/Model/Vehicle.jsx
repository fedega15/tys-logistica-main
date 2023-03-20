import { customAxios } from "../axiosInstanse";
import { urlGetVehicles } from "../URLS/urls";

export const getVehicles = async () => {
    return await customAxios.get(urlGetVehicles)
}