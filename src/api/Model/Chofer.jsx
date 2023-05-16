import customAxiosPrivate from "../axiosInstanse";
import { urlCrearChofer, urlGetChofer, urlModificarChofer } from "../URLS/urls";

export const getChofer = async () => {
  return await customAxiosPrivate.get(urlGetChofer);
};
export const CrearChofer = async (choferInfo) => {
  console.log(choferInfo);
  return await customAxiosPrivate.post(urlCrearChofer, choferInfo);
};
export const ModificarChofer = async (choferInfo) => {
  console.log(choferInfo);
  return await customAxiosPrivate.put(urlModificarChofer, choferInfo);
};