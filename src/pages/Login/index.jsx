import { useForm } from "../../hooks/useForm"
import { UserLogin } from "../../api/Model/Login"

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
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, vaildateForm)

    const handleFetch = async (e) => {
        try {
            e.preventDefault()
            if (errors.hasOwnProperty('email')
                ||errors.hasOwnProperty('password')) {
                //hay errores
                console.log(errors)
                return false
            }
            const api_response = await UserLogin(initialForm)
            if (api_response.status === 200) {
                const { data } = api_response
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

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
                                {errors.password && <p  className='text-danger' >{errors.password}</p>}
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