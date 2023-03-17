import { useForm } from "../../hooks/useForm"

const initialForm = {
    useremail:"",
    password:"",
}

const vaildateForm =(form) => {

    let errors = {}
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    let regexPassword = /^\?=.{8,}$/
   
    if (!form.useremail.trim()) {
        errors.useremail = "el email es requerido"
    }else if (!regexEmail.test(form.useremail.trim())) {
        errors.useremail = "El campo email debe tener @ y un .com"
    }
    
    if (!form.password.trim()) {
        errors.password = "el password es requerido"
    }else if (!regexPassword.test(form.password.trim())) {
        errors.password = "El campo email debe tener mas de 8 caractes"
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
            e.preventDefault()
            try {
                if (asd) {
                    const api_response = await newUser(credenciales)
                    if (api_response.status === 200) {
                        const { data } = api_response
                        console.log(data)
                    }
                } console.log(errors, correct)
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
                                <label htmlFor="useremail">Email</label>
                                <input  
                                type='text' 
                                name="useremail"
                                placeholder="Tys@logistica.com.ar"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.useremail}                                   
                                />
                                {errors.useremail && <p>{errors.useremail}</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="password">Contraseña</label>
                                <input  
                                type='text' 
                                name="password" 
                                placeholder="*************"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.password}
                                />
                                    {errors.password && <p>{errors.password}</p>}
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
        )}

        export default ContactForm