import { useForm } from "../../hooks/useForm"
import { UserLogin } from "../../api/Model/User"
import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import { Link, useNavigate, useLocation } from "react-router-dom"

const initialForm = {
    email: "",
    password: "",
}
const vaildateForm = (form) => {
    let errors = {}
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //let regexPassword = /^\?=.{3,}$/

    if (!form.email.trim()) {
        errors.email = "el email es requerido"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo email debe tener @ y un .com"
    }
    if (!form.password.trim()) {
        errors.password = "el password es requerido"
    } else if (String(form.password).trim().length < 3) {
        errors.password = "El campo password debe tener mas de 3 caractes"
    }
    return errors
}
const ContactForm = () => {
    const { setAuth } = useAuth() // aca uso el hook y remplazo useContext(AuthContext) global auth
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const [Loading, setLoading] = useState(false)
    const {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, vaildateForm)
    // VALIDO EL FORM CON EL USEFORM Y VALIDATEFORM. SI HAY ERRORES EN EL FORM, LA F SE DETIENE.

    const handleFetch = async (e) => {
        try {
            e.preventDefault()
            if (errors.hasOwnProperty('email') || errors.hasOwnProperty('password')) {
                console.log(errors)
                return false
            }
            console.log(form)
            const api_response = await UserLogin(form)
            //USERLOGIN SI EL FORM ES VALIDO EJECUTA UNA SOLICITUD DE INCIIO DE SESION
            // SI ES EXITOSA Y RECIBE UN TOKEN , UTILIZO LA F SETAUTH PARA ACTUALIZAR 
            // EL CONTEXTO DE AUT CON EL CORREO PASS Y TOKEN,  
            if (api_response.status === 200) {
                const { data } = api_response
                const accessToken = api_response?.data?.accessToken;
                setAuth((prevAuth) => ({
                    ...prevAuth,
                    email: form.email,
                    password: form.password,
                    accessToken: accessToken,
                    auth: true
                }))
                // setForm({ email: '', password: '' }) PREGUNTAR A FEDE
                navigate('/') //USO NAVIGATE  PARA REDIRIGIR AL USUARIO A LA RAIZ DEL SITIO, PREG A FEDE SI ACA FLASHIE
            }
        } catch (error) {
            console.log(error.response?.data || error.message)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    /*
  const handleFetch = async (e) => {
      e.preventDefault()
      setLoading(true)
      
      try {
          if (errors.hasOwnProperty('email') || errors.hasOwnProperty('password')) {
              //hay errores
              console.log(errors)
              return false
          }
          console.log(form)
          //faltaba poner parametro donde se crea la func
          const api_response = await UserLogin(form)
          if (api_response.status === 200) {
              const { data } = api_response
              console.log(data)
              const accessToken = api_response?.data?.accessToken;
              setAuth({ email : form.email, password: form.password , accessToken}) // preguntar a fede como paso las props email y password aca.
              setSucces(true)
          }
      } catch (error) {
          console.log(error.response.data)
          console.log(error)
      }
      finally {
          setLoading(false)
        }
  }
  /*useEffect (() => {
      handleFetch()
    },[])*/

    if (Loading) { return (<>Loading..</>) }

    // preg a fede si elimino el handlesubmit
    return (
        <div className='container'>
            <div className="container ">
                <div className="col-md-11 mt-5">
                    <form onSubmit={handleSubmit} className='position-relative'>
                        <h4 className="mb-3">Iniciar sesion</h4>
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type='email'
                                    name="email"
                                    placeholder="Tys@logistica.com.ar"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.email}
                                />
                                {errors.email && <p className='text-danger'>{errors.email}</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type='password'
                                    name="password"
                                    placeholder="*************"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.password}
                                />
                                {errors.password && <p className='text-danger' >{errors.password}</p>}
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <button onClick={handleFetch}>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm