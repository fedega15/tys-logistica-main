import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    // hacemos el log out sin enviar request al backend.
    // eliminando el token del local storage

    const { dispatch } = useAuthContext()
    const logout = () => {
        //remuevo el user del storage
        localStorage.removeItem('user')

        // dispatch logout,si vemos en authcontext esta armado el caso logout
        dispatch ({type: 'LOGOUT'})
    }
    
    return  {logout} // ahora ver como usarlo en la app(boton en nav)
}