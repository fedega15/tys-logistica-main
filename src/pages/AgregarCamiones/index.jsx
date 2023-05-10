import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "../../hooks/useForm";
import { AgregarCamion, ModificarCamion } from "../../api/Model/Vehicle";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import validateVehiculo from "../../components/validateVehiculo";

const initialForm = {
  tipo: "",
  patente: "",
  numChasis: "",
  numMotor: "",
  numMovil: "",
  id: "",
};

const AgregarModificarCamiones = () => {
  const { state: paramVehicle } = useLocation(); // obteng el objeto state pasado como parámetro se asigna a paramVehicle el valor de state
  const [vehicle, setVehicle] = useState(paramVehicle || initialForm); // estado vehicle que se inicializa con el valor de paramVehicle si hay, sino se utiliza el valor de initialForm
  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    shouldShowErrors,
  } = useForm(vehicle, validateVehiculo);

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
        }
      } else {
        api_response = await ModificarCamion(form, {
          id: paramVehicle.id,
        });

        if (api_response.status === 200) {
          const { data } = api_response;
        }
      }
      setSending(false);
      setSent(true);
    } catch (error) {
      setSending(false);
    }
  };
  useEffect(() => {
    //manejo los cambios en el estado paramVehicle. Si paramVehicle cambia, la función establece el estado vehicle en paramVehicle
    if (paramVehicle) {
      setVehicle(paramVehicle);
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
              {shouldShowErrors("patente") && (
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
              {shouldShowErrors("numChasis") && (
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
              {shouldShowErrors("numMotor") && (
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
              {shouldShowErrors("numMovil") && (
                <p className="text-danger">{errors.numMovil}</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-3 mb-3">
              <label htmlFor="country">Tipo</label>
              <select
                type="number"
                className="btn btn-light border custom-select d-block w-100"
                id="tipo"
                name="tipo"
                onChange={handleChange}
                value={form.tipo}
              >
                <option value="">Opciones...</option>
                <option value={1}>Camion</option>
                <option value={2}>Acoplado</option>
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
