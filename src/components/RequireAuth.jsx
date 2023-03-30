import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";


const RequireAuth = () => {
 const { auth} = useAuth(); // COMPONENTE QUE VERIFICA SI EL USUARIO ESTA AUTENTICADO O NO PARA ACCEDER,
                            // MEDIANTE EL HOOK USEAUTH OBTENGO LOS DATOS DE AUT
 const location = useLocation();

 return (
    auth?.user // SI AUTH.USER EXISTE SIGNIFICA Q EL USERR ESTA AUTENTICADO.
        ? <Outlet/> // EL COMPONENTE OUTLET PERMITE EL ACCESO A LAS RUTAS PROTEGIDAS. MOSTRANDO EL CONT DE LA RUTA ACTUAL
        : <Navigate to="/login" state={{form: location}} replace /> // NAVIGATE SI NO ESTA AUTENTICADO LO REDIRIGE AL 
                                                                    //INCIO DE SESION, ESTA ALMACENA EN UN STATE PARA ALMACENAR LA UBI ACTUAL
}

export default RequireAuth