import React, { useState } from 'react';
import { newUser } from '../../api/Model/Login';
import { validacionSignUp } from '../../utils/validacionSignUp';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {

    const [credenciales, setCredenciales] = useState({
        useremail: null,
        password: null,
    });

    const [errores, setErrores] = useState({
        'useremail': null,
        'password': null,
    })

    const handleChange = async (e) => {
        console.log(credenciales)
        e.preventDefault()
        try {
            const {correct,errors} = validacionSignUp(credenciales)
            console.log(correct,errors)
            setErrores(errors)
            if (correct) {
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
                    <form className='position-relative'>
                        <h4 className="mb-3">Iniciar sesion</h4>
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="useremail">Email</label>
                                <input
                                    className="form-control"
                                    onChange={e => setCredenciales({ ...credenciales, "useremail": e.target.value })}
                                    placeholder="tys@ejemplo.com"
                                />
                                {errores.useremail ? errores.useremail : null}
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    className="form-control"
                                    name="password"
                                    onChange={e => setCredenciales({ ...credenciales, 'password': e.target.value })}
                                    placeholder="***********"
                                />
                                {errores.password ? errores.password : null}
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <button
                                
                                onClick={handleChange}
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Login;