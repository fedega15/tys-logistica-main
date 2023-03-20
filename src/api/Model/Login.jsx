import { customAxios } from "../axiosInstanse";
import { urlLogin } from '../URLS/urls'

export const UserLogin = async () => {
        return await customAxios.post(urlLogin)
}