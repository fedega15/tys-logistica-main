import { customAxios } from "../axiosInstanse";
import { urlLogin } from '../URLS/loginUrl'

export const newUser = async () => {
        return await customAxios.post(urlLogin)
}