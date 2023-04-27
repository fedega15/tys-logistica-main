import { useForm } from "../../hooks/useForm";
import { UserLogin } from "../../api/Model/User";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const initialForm = {
  email: "",
  password: "",
};
const vaildateForm = (form) => {
  let errors = {};
  let regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  //let regexPassword = /^\?=.{3,}$/

  if (!form.email.trim()) {
    errors.email = "el email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo email debe tener @ y un .com";
  }
  if (!form.password.trim()) {
    errors.password = "el password es requerido";
  } else if (String(form.password).trim().length < 3) {
    errors.password = "El campo password debe tener mas de 3 caractes";
  }
  return errors;
};
const ContactForm = () => {
  const { setAuth } = useAuth(); // aca uso el hook y remplazo useContext(AuthContext) global auth
  const navigate = useNavigate();

  const [Loading, setLoading] = useState(false);
  const { form, errors, handleChange, handleBlur,shouldShowErrors , handleSubmit } = useForm(
    initialForm,
    vaildateForm
  );
  // VALIDO EL FORM CON EL USEFORM Y VALIDATEFORM. SI HAY ERRORES EN EL FORM, LA F SE DETIENE.
  const handleFetch = async (e) => {
    try {
      e.preventDefault();
      if (errors.hasOwnProperty("email") || errors.hasOwnProperty("password")) {
        console.log(errors);
        return false;
      }
      const api_response = await UserLogin(form);
      if (api_response.status === 200) {
        console.log(1);
        const accessToken = api_response?.data?.accessToken;
        console.log(accessToken);
        setAuth((prevAuth) => ({
          ...prevAuth,
          email: form.email,
          password: form.password,
          accessToken: accessToken,
          auth: true,
        }));
        // setForm({ email: '', password: '' }) PREGUNTAR A FEDE
        navigate("/"); //USO NAVIGATE  PARA REDIRIGIR AL USUARIO A LA RAIZ DEL SITIO, PREG A FEDE SI ACA FLASHIE
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (Loading) {
    return <>Loading..</>;
  }

  // preg a fede si elimino el handlesubmit
  return (
    <div className="container">
      <div className="container ">
        <div className="col-md-11 mt-5">
          <form onSubmit={handleSubmit} className="position-relative">
            <h4 className="mb-3">Iniciar sesion</h4>
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Tys@logistica.com.ar"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.email}
                />
                 {shouldShowErrors("email") && (
            <p className="text-danger">{errors.email}</p>
          )}
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  placeholder="*************"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.password}
                />
                 {shouldShowErrors("password") && (
            <p className="text-danger">{errors.password}</p>
          )}
              </div>
            </div>

            <div className="form-group">
              <p>
                No tenes cuenta?{" "}
                <Link className="fw-bolder p-2 pb-4 " to="/Registro">
                  {" "}
                  Registrate
                </Link>
              </p>
              <button onClick={handleFetch}>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
