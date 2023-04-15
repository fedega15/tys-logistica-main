import customAxiosPrivate from "../axiosInstanse";
import { urlCrearChofer, urlGetChofer } from "../URLS/urls";

export const getChofer = async () => {
  return await customAxiosPrivate.get(urlGetChofer);
};
export const CrearChofer = async (choferInfo) => {
  console.log(choferInfo);
  return await customAxiosPrivate.post(urlCrearChofer, choferInfo);
};
