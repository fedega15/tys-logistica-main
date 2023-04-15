import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};
//EL HOOK USEAUTH OBTIENE EL OBJETO SETAUTH Q SE US PARA ACTUALIZAR EL CONTEXTO DE AUTENTITCACION

export default useAuth;
