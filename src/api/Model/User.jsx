import { customAxios } from "../axiosInstanse";
import { urlLogin } from '../URLS/urls'

export const UserLogin = async (userInfo) => {
        console.log(userInfo)
        return await customAxios.post(urlLogin,userInfo)
}