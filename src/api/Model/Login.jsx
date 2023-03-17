import { customAxios } from "../axiosInstanse";
import { urlLogin } from '../URLS/loginUrl'

export const UserLogin = async () => {
        return await customAxios.post(urlLogin)
}