import { FaTruckMoving } from "react-icons/fa";
import { HiCog } from "react-icons/hi";
import { AiTwotoneSchedule } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillSecurityScan } from "react-icons/ai";
import { AiFillTags } from "react-icons/ai";
import { parseISO } from "date-fns";
import "./color.css";
import { useState } from "react";

export const Chofer = ({
  id_razonsocial,
  cuil,
  direccion,
  idLocalidad,
  codigopostal,
  telefono,
  correo,
  dateRevMedica,
  dateCargaGral,
  dateCargaPeligrosa,
  dateLicConducir,
  dateCredPuerto,
  apelnomb,
}) => {
  const today = new Date(); 

  //color segun fech
  const getColorAndMessage = (date) => {
    const parsedDate = parseISO(date);
    const daysDifference = Math.ceil(
      (parsedDate - today) / (1000 * 60 * 60 * 24)
    );

    let color = "";
    let message = "";

    if (daysDifference < 0) {
      color = "red"; // SE VENCIO
      message = "Se venció, tramitar renovación";
    } else if (daysDifference <= 30) {
      color = "yellow"; // PROXIMO A VENCER
      message = "Próximo a vencerse en 30 días o menos";
    } else if (daysDifference >= 60) {
      color = "blue"; // 2 MESES O MAS
      message = "Vence dentro de dos meses o más";
    }

    return { color, message };
    
  };
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseOver = () => {
    setShowMessage(true);
  };

  const handleMouseOut = () => {
    setShowMessage(false);
  };

  // CADA COLOR P CADA ACCION.
  const { color: colorRevMedica, message: messageRevMedica } =
    getColorAndMessage(dateRevMedica);
  const { color: colorCargaGral, message: messageCargaGral } =
    getColorAndMessage(dateCargaGral);
  const { color: colorCargaPeligrosa, message: messageCargaPeligrosa } =
    getColorAndMessage(dateCargaPeligrosa);
  const { color: colorLicConducir, message: messageLicConducir } =
    getColorAndMessage(dateLicConducir);
  const { color: colorCredPuerto, message: messageCredPuerto } =
    getColorAndMessage(dateCredPuerto);
  return (
    <div>
      <div>
        <h5 className="text-dark  p-2">Apellido y Nombre: </h5>
        <span className=" p-2">
          {" "}
          <AiTwotoneSchedule />"{apelnomb}"{" "}
        </span>
      </div>
      <div>
        <h5 className="text-dark border-top p-2">Razon Social: </h5>
        <span className=" p-2">
          {" "}
          <AiFillDashboard />"{id_razonsocial}"{" "}
        </span>
      </div>
      <div>
        <h5 className="text-dark border-top p-2">Correo: </h5>
        <span className=" p-2">
          {" "}
          <HiCog />"{correo}"{" "}
        </span>
      </div>
      <div>
        <h5 className="text-dark border-top p-2">Direccion: </h5>
        <span className=" p-2">
          <FaTruckMoving /> "{direccion}"{" "}
        </span>
      </div>
      <div>
        <h5 className="text-dark border-top p-2">Revisacion Medica: </h5>
        <div className="grid-container">
          <span className={`bg-${colorRevMedica} p-2 rounded-pill`}  onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
            <AiFillTags />"{dateRevMedica}"
          </span>
          {showMessage && <span className={`p-2 w-25 text-${colorRevMedica} `}>
            {messageRevMedica}
          </span>}
        </div>
      </div>
      <h5 className="text-dark border-top p-2 ">Credencial Puerto: </h5>
      <div className="grid-container">
        <span className={`bg-${colorCredPuerto} p-2 rounded-pill `}>
          {" "}
          <AiFillSecurityScan />"{dateCredPuerto}"{" "}
        </span>
        <span className={`p-2 w-25 text-${colorCredPuerto} `}>
          {messageCredPuerto}
        </span>
      </div>
      <h5 className="text-dark border-top p-2 ">Licencia de Conducir: </h5>
      <div className="grid-container">
        <span className={`bg-${colorLicConducir} p-2 rounded-pill`}>
          {" "}
          <AiFillSecurityScan />"{dateLicConducir}"{" "}
        </span>
        <span className={`p-2 w-25 text-${colorLicConducir} `}>
          {messageLicConducir}
        </span>
      </div>
      <h5 className="text-dark border-top p-2 ">Carga Peligrosa: </h5>
      <div className="grid-container">
        <span className={`bg-${colorCargaPeligrosa} p-2 rounded-pill`}>
          {" "}
          <AiFillSecurityScan />"{dateCargaPeligrosa}"{" "}
        </span>
        <span className={`p-2 w-25 text-${colorCargaPeligrosa} `}>
          {messageCargaPeligrosa}
        </span>
      </div>
      <h5 className="text-dark border-top p-2 ">Carga General: </h5>
      <div className="grid-container">
        <span className={`bg-${colorCargaGral} p-2 rounded-pill`}>
          {" "}
          <AiFillSecurityScan />"{dateCargaGral}"{" "}
        </span>
        <span className={`p-2 w-25 text-${colorCargaGral} `}>
          {messageCargaGral}
        </span>
      </div>
      <div className="grid-container">
        <h5 className="text-dark border-top p-2 ">Numero de Cuil: </h5>
        <span className=" p-2">
          {" "}
          <AiFillSecurityScan />"{cuil}"{" "}
        </span>
      </div>
      <div className="grid-container">
        <h5 className="text-dark border-top p-2 ">Codigo Postal: </h5>
        <span className=" p-2">
          {" "}
          <AiFillSecurityScan />"{codigopostal}"{" "}
        </span>
      </div>
      <div className="grid-container">
        <h5 className="text-dark border-top p-2 ">Telefono: </h5>
        <span className=" p-2">
          {" "}
          <AiFillSecurityScan />"{telefono}"{" "}
        </span>
      </div>
      <div className="grid-container">
        <h5 className="text-dark border-top p-2 ">Localidad: </h5>
        <span className=" p-2">
          {" "}
          <AiFillSecurityScan />"{idLocalidad}"{" "}
        </span>
      </div>
    </div>
  );
};
