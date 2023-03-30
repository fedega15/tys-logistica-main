import { createContext, useState } from "react";            

const AuthContext = createContext({})
export const AuthProvider = ({children}) => {
    const [auth, setAuth ] = useState({})
                                                // aca estoy obteniendo email password y token q me da como response
                                                // la api si los datos que yo le envie en el get (login) fueron correctos. 
    return (    
        <AuthContext.Provider value={{ auth, setAuth}} > 
            {children}
        </AuthContext.Provider> 
                    // GENERO EL CONTEXTO DE AUTENTICACION PARA COMPARTIR LOS DATOS OBTENIDOS EN EL PROCESO DE AUTENTICACION
                    //  ENTRE TODOS LOS COMPONENTES DE REACT, SIN TENER Q PASARLO POR PROPS

    )
}

export default AuthContext