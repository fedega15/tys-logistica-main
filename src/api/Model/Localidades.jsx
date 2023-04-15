import customAxiosPrivate from "../axiosInstanse";
import { urlGetLocalidades, urlGetProvincias } from "../URLS/urls";

export const getProvincias = async () => {
    return await customAxiosPrivate.get(urlGetProvincias)
}
export const getLocalidades = async (idProvincia) => {
    return await customAxiosPrivate.get(urlGetLocalidades + idProvincia)
}
