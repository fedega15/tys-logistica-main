import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "../../hooks/useForm";
import { AgregarCamion, ModificarCamion } from "../../api/Model/Vehicle";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const initialForm = {
  tipo: "",
  patente: "",
  numChasis: "",
  numMotor: "",
  numMovil: "",
  id: "",
};

const vaildateForm = (form) => {
  let errors = {};

  if (!form.patente.trim()) {
    errors.patente = "la patente es requerido";
  } else if (String(form.patente).trim().length < 5) {
    errors.patente = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.numMotor.trim()) {
    errors.numMotor = "el numero de motor es requerido";
  } else if (String(form.numMotor).trim().length < 3) {
    errors.numMotor = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.numChasis.trim()) {
    errors.numChasis = "el numero de chasis es requerido";
  } else if (String(form.numChasis).trim().length < 5) {
    errors.numChasis = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.numMovil) {
    errors.numMovil = "el numero de movil es requerido"; // este debe ser un numero acomodar preg a fede.
  } else if (form.numMovil.length < 5) {
    errors.numMovil = "El campo debe ser mayor 5 caracteres";
  }
  return errors;
};

const AgregarModificarCamiones = () => {
  const { state: paramVehicle } = useLocation(); // obteng el objeto state pasado como parámetro se asigna a paramVehicle el valor de state
  // console.log(paramVehicle);
  const [vehicle, setVehicle] = useState(paramVehicle || initialForm); // estado vehicle que se inicializa con el valor de paramVehicle si hay, sino se utiliza el valor de initialForm
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    vehicle,
    vaildateForm
  );

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleFetch = async (paramVehicle) => {
    try {
      let api_response;
      setSending(true);

      if (!paramVehicle) {
        api_response = await AgregarCamion(form);
        setSending(false);

        if (api_response.status === 200) {
          const { data } = api_response;
          console.log(data);
        }
      } else {
        console.log(paramVehicle);
        api_response = await ModificarCamion(form, {
          id: paramVehicle.id,
        });

        if (api_response.status === 200) {
          const { data } = api_response;
          console.log(data);
        }
      }
      setSending(false);
      setSent(true);
    } catch (error) {
      console.log(error);
      setSending(false);
    }
  };
  useEffect(() => {
    //manejo los cambios en el estado paramVehicle. Si paramVehicle cambia, la función establece el estado vehicle en paramVehicle
    if (paramVehicle) {
      console.log("hay parametro");
      setVehicle(paramVehicle);
      // console.log(paramVehicle);
      console.log(vehicle);
    } else {
      console.log("no hay parametro");
    }
  }, [paramVehicle]);

  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <form onSubmit={handleSubmit}>
          <h4 className="mb-3">Carga tu vehiculo</h4>

          <div className="row">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Patente</label>
              <input
                type="text"
                name="patente"
                placeholder="111-aaa-111"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.patente}
              />
              {errors.patente && (
                <p className="text-danger">{errors.patente}</p>
              )}
            </div>

            <div className="form-group col-md-6 mb-3">
              <label htmlFor="lastname">Numero de chasis</label>
              <input
                type="text"
                name="numChasis"
                placeholder="123123qwdas"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.numChasis}
              />
              {errors.numChasis && (
                <p className="text-danger">{errors.numChasis}</p>
              )}
            </div>

            <div className="form-group col-md-6 mb-3 ">
              <label htmlFor="email">Numero de motor</label>
              <input
                type="text"
                name="numMotor"
                placeholder="123123qwdas"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.numMotor}
              />
              {errors.numMotor && (
                <p className="text-danger">{errors.numMotor}</p>
              )}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="email">Numero movil</label>
              <input
                type="number"
                name="numMovil"
                placeholder="123123qwdas"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.numMovil}
              />
              {errors.numMovil && (
                <p className="text-danger">{errors.numMovil}</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="country">Tipo</label>
              <select
                type="number"
                className="custom-select d-block w-100"
                id="tipo"
                name="tipo"
                onChange={handleChange}
                value={form.tipo}
              >
                <option value="">Opciones...</option>
                <option value={1}>Camion</option>
                <option value={2}>Acoplado</option>
                <option value={3}>Camion + Acoplado</option>
              </select>
            </div>

            <div className="form-group col-md-6 mb-3 color">
              <label htmlFor="state">Id</label>
              <select
                className="custom-select d-block w-100"
                type="number"
                id="id"
                name="id"
                onChange={handleChange}
                value={form.id}
              >
                <option value="">Opciones...</option>
                <option value={1}>1</option>
                <option value={2}>2 </option>
                <option value={3}>3</option>
              </select>
            </div>
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
export default AgregarModificarCamiones;
