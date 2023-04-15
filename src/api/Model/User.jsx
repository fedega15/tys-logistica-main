import customAxiosPrivate from "../axiosInstanse";
import { urlLogin, urlNewUser } from "../URLS/urls";

export const UserLogin = async (userInfo) => {
  //console.log(userInfo)
  return await customAxiosPrivate.post(urlLogin, userInfo);
};
export const NewUser = async (userInfo) => {
  return await customAxiosPrivate.post(urlNewUser, userInfo);
};
