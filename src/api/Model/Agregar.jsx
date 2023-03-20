import { customAxios } from "../axiosInstanse";
import { urlAgregar } from '../URLS/urls'

export const AgregarCamion = async () => {
        return await customAxios.post(urlAgregar)
}