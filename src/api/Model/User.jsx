import customAxiosPrivate from '../axiosInstanse'
import { urlLogin } from '../URLS/urls'

export const UserLogin = async (userInfo) => {
        //console.log(userInfo)
        return await customAxiosPrivate.post(urlLogin,userInfo)
}