import { AxiosError } from "axios";

export const handleFetchError = (error) => {
  let strError = "Algo salio mal";
  if (error instanceof AxiosError) {
    //es un error de la peticion a la API
    strError = error.response?.data.msj;
  } else if (error instanceof Error) {
    //Error de logica de programacion
    //ejemplo, cerrar mal una llave
    strError = "Error de logica";
  }
  return strError;
};
