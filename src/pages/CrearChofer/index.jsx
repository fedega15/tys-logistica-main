import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "../../hooks/useForm";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CrearChofer } from "../../api/Model/Chofer";
import validateForm from "../../components/validateForm";
import { getProvincias, getLocalidades } from "../../api/Model/Localidades";

const initialForm = {
  razonSocial: "",
  cuil: "",
  direccion: "",
  idLocalidad: "",
  codigopostal: "",
  telefono: "",
  correo: "",
  dateRevMedica: "",
  dateCargaGral: "",
  dateCargaPeligrosa: "",
  dateLicConducir: "",
  dateCredPuerto: "",
  apelnomb: "",
  nomb_empresa:"",
  nombrecorto:"",
  id_chofer:"",
  id_empresa:"",
  nombre:"",
  activo:"",



};

const CrearChoferes = () => {
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validateForm
  );

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [provincias, setProvincias] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const [localidad, setLocalidad] = useState();
  const [provincia, setProvincia] = useState();

  const handleFetch = async (e) => {
    try {
      e.preventDefault();
      if (
        errors.hasOwnProperty("razonSocial") ||
        errors.hasOwnProperty("cuil") ||
        errors.hasOwnProperty("telefono") ||
        errors.hasOwnProperty("codigoPostal")
      ) {
        //hay errores
        console.log(errors);
        return false;
      }
      setSending(true);
      const api_response = await CrearChofer(form);
      setSending(false);

      if (api_response.status === 200) {
        const { data } = api_response;
       // console.log(data);
      }
      setSending(false);
      setSent(true);
    } catch (error) {
      console.log(error);
      setSending(false);
    }
  };

  const handleFetchProvincias = async () => {
    try {
      const api_response = await getProvincias();
      if (api_response.status === 200) {
        console.log(api_response.data);
        setProvincias([...api_response.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchLocalidades = async (id_provincia) => {
    try {
      const api_response = await getLocalidades(id_provincia);
      if (api_response.status === 200) {
       // console.log(api_response.data);
        setLocalidades([...api_response.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange1 = (e, target) => {
    const { value } = e.target;
    if (target === "p") {
      handleFetchLocalidades(value);
      setProvincia(value);
    } else {
      setLocalidad(value);
    }
  };

  useEffect(() => {
    handleFetchProvincias();
  }, []);

  // console.log(`Provincias: ${provincia}`);
  //    console.log(`localidad: ${localidad}`);
  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <form onSubmit={handleSubmit}>
          <h4 className="mb-3">Carga los datos</h4>

          <div className="row">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Apellido y Nombre:</label>
              <input
                type="text"
                name="apelnomb"
                placeholder="gustavo witz"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.apelnomb}
              />
              {errors.apelnomb && (
                <p className="text-danger">{errors.apelnomb}</p>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Razon Social:</label>
              <input
                type="text"
                name="razonSocial"
                placeholder="s.a sa"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.razonSocial}
              />
              {errors.razonSocial && (
                <p className="text-danger">{errors.razonSocial}</p>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Correo:</label>
              <input
                type="text"
                name="correo"
                placeholder="gustavo witz"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.correo}
              />
              {errors.correo && <p className="text-danger">{errors.correo}</p>}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Provincia:</label>
              <input
                type="text"
                name="nombrecorto"
                placeholder="gustavo witz"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.nombrecorto}
              />
              {errors.nombrecorto && <p className="text-danger">{errors.nombrecorto}</p>}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Nombre Empresa:</label>
              <input
                type="text"
                name="nomb_empresa"
                placeholder="gustavo witz"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.nomb_empresa}
              />
              {errors.nomb_empresa && <p className="text-danger">{errors.nomb_empresa}</p>}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Direccion:</label>
              <input
                type="text"
                name="direccion"
                placeholder="gustavo witz"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.direccion}
              />
              {errors.direccion && (
                <p className="text-danger">{errors.direccion}</p>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Nombre:</label>
              <input
                type="text"
                name="nombre"
                placeholder="gustavo witz"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.nombre}
              />
              {errors.nombre && (
                <p className="text-danger">{errors.nombre}</p>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Revisacion Medica:</label>
              <input
                type="text"
                name="dateRevMedica"
                placeholder="gustavo witz"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.dateRevMedica}
              />
              {errors.dateRevMedica && (
                <p className="text-danger">{errors.dateRevMedica}</p>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Credencial Puerto:</label>
              <input
                type="text"
                name="dateCredPuerto"
                placeholder="gustavo witz"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.dateCredPuerto}
              />
              {errors.dateCredPuerto && (
                <p className="text-danger">{errors.dateCredPuerto}</p>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Licencia de Conducir:</label>
              <input
                type="text"
                name="dateLicConducir"
                placeholder="gustavo witz"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.dateLicConducir}
              />
              {errors.dateLicConducir && (
                <p className="text-danger">{errors.dateLicConducir}</p>
              )}
            </div>

            <div className="form-group col-md-6 mb-3">
              <label htmlFor="lastname">Carga Peligrosa:</label>
              <input
                type="text"
                name="dateCargaPeligrosa"
                placeholder="20-40454618-0"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.dateCargaPeligrosa}
              />
              {errors.dateCargaPeligrosa && (
                <p className="text-danger">{errors.dateCargaPeligrosa}</p>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="lastname">Carga General:</label>
              <input
                type="text"
                name="dateCargaGral"
                placeholder="20-40454618-0"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.dateCargaGral}
              />
              {errors.dateCargaGral && (
                <p className="text-danger">{errors.dateCargaGral}</p>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="lastname">Numero de cuil:</label>
              <input
                type="number"
                name="cuil"
                placeholder="20-40454618-0"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.cuil}
              />
              {errors.cuil && <p className="text-danger">{errors.cuil}</p>}
            </div>

            <div className="form-group col-md-6 mb-3 ">
              <label htmlFor="telefono">Telefono:</label>
              <input
                type="number"
                name="telefono"
                placeholder="6680465"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.telefono}
              />
              {errors.telefono && (
                <p className="text-danger">{errors.telefono}</p>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="email">Codigo Postal:</label>
              <input
                type="number"
                name="codigopostal"
                placeholder="2000"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.codigopostal}
              />
              {errors.codigopostal && (
                <p className="text-danger">{errors.codigopostal}</p>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="email">ID del chofer:</label>
              <input
                type="number"
                name="id_chofer"
                placeholder="2000"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.id_chofer}
              />
              {errors.id_chofer && (
                <p className="text-danger">{errors.id_chofer}</p>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="email">ID la empresa:</label>
              <input
                type="number"
                name="id_empresa"
                placeholder="2000"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.id_empresa}
              />
              {errors.id_empresa && (
                <p className="text-danger">{errors.id_empresa}</p>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="email">ID la razonsocial:</label>
              <input
                type="number"
                name="id_razonsocial"
                placeholder="2000"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.id_razonsocial}
              />
              {errors.id_razonsocial && (
                <p className="text-danger">{errors.id_razonsocial}</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-6 mb-3 ">
              <label htmlFor="state">Provincia</label>
              <select
                className="custom-select d-block w-100"
                type="number"
                name="idLocalidad"
                value={form.idLocalidad}
                onChange={handleChange}
                onClick={(e) => handleChange1(e, "p")}
              >
                {provincias.length > 0
                  ? provincias.map((p) => {
                      return <option key={p.id} value={p.id}>{p.nombrecorto}</option>;
                    })
                  : null}
              </select>
            </div>

            {!provincia ? null : (
              <div className="form-group col-md-6 mb-3 ">
                <label htmlFor="state">Localidades</label>
                <select
                type="number"
                name="idLocalidad"
                value={form.idLocalidad}
                  className="custom-select d-block w-100"
                  onClick={(e) => handleChange1(e, "l")}
                  onChange={handleChange}
                >
                  {localidades.length > 0
                    ? localidades.map((l) => {
                        return (
                          <option  value={l.id} key={l.id}>
                            {l.nombre}
                          </option>
                        );
                      })
                    : null}
                </select>
              </div>
            )}
          </div>

          <div className="form-group">
            <button onClick={handleFetch} disabled={sending || sent}>
              {sending ? "Enviando..." : sent ? "Enviado" : "Enviar"}
              {sent ? <span>&#10003;</span> : ""}
            </button>
          </div>
          {sent && (
            <p className="text-success">
              {" "}
              Tu vehiculo se añadio a :
              <Link
                className="fw-bolder border-bottom border-secondary p-2 pb-4"
                to="/"
              >
                Lista camiones
              </Link>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
export default CrearChoferes;
