import customAxiosPrivate from "../axiosInstanse";
import { urlGetLocalidades, urlGetProvincias } from "../URLS/urls";

export const getProvincias = async () => {
  return await customAxiosPrivate.get(urlGetProvincias);
};
export const getLocalidades = async (id_provincia) => {
  return await customAxiosPrivate.get(urlGetLocalidades + id_provincia);
};
