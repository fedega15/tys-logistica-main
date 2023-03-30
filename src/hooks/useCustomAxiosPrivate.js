//este hook es para atacar los interceptors 

import { customAxiosPrivate } from "../api/axiosInstanse";
import { useEffect  } from "react";
import useAuth from "./useAuth";

const useCustomAxiosPrivate = () => {
    const { auth } = useAuth();
    
    useEffect(() => {

        const requestInterceptors = customAxiosPrivate.interceptors.response.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.AccesToken}`
                }
                return config;
            }, (error) => Promise.reject(error)
        )

        const responseInterceptors = customAxiosPrivate.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error.response.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    prevRequest.headers['Authorization'] =  `Bearer ${AccesToken}`;
                    return customAxiosPrivate(prevRequest)
            }
            return Promise.reject(error)
        }
        );

        return () => { 
            customAxiosPrivate.interceptors.response.eject(requestInterceptors) //);
            customAxiosPrivate.interceptors.request .eject(responseInterceptors);
        }
    }, [auth])

    return customAxiosPrivate
}
//AHORA PREG A FEDE SI TENGO Q USAR ESTA CUSTOMAXIOSPRIVATE EN LISTAR CAMIONES Y EN AGREGAR CAMION PARA Q SEAN PRIVADAS.
export default useCustomAxiosPrivate