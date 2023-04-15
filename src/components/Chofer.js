import { FaTruckMoving } from "react-icons/fa";
import { HiCog } from "react-icons/hi";
import { AiTwotoneSchedule } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillSecurityScan } from "react-icons/ai";
import { AiFillTags } from "react-icons/ai";

export const Chofer = ({
  nomb_empresa,
  nombre,
  nombrecorto,
  activo,
  id_chofer,
  id_empresa,
  id_razonsocial,
  cuil,
  direccion,
  idLocalidad,
  codigoPostal,
  telefono,
  correo,
  dateRevMedica,
  dateCargaGral,
  dateCargaPeligrosa,
  dateLicConducir,
  dateCredPuerto,
  apelnomb,
}) => {
  return (
    <div>
      <h5 className="text-dark  p-2">Apellido y Nombre: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiTwotoneSchedule />"{apelnomb}"{" "}
      </span>
      <h5 className="text-dark border-top p-2">Razon Social: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiFillDashboard />"{id_razonsocial}"{" "}
      </span>
      <h5 className="text-dark border-top p-2">Correo: </h5>
      <span className="text-muted p-2">
        {" "}
        <HiCog />"{correo}"{" "}
      </span>
      <h5 className="text-dark border-top p-2">Direccion: </h5>
      <span className="text-muted p-2">
        <FaTruckMoving /> "{direccion}"{" "}
      </span>
      <h5 className="text-dark border-top p-2">Revisacion Medica: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiFillTags />"{dateRevMedica}"{" "}
      </span>
      <h5 className="text-dark border-top p-2 ">Credencial Puerto: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiFillSecurityScan />"{dateCredPuerto}"{" "}
      </span>
      <h5 className="text-dark border-top p-2 ">Licencia de Conducir: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiFillSecurityScan />"{dateLicConducir}"{" "}
      </span>
      <h5 className="text-dark border-top p-2 ">Carga Peligrosa: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiFillSecurityScan />"{dateCargaPeligrosa}"{" "}
      </span>
      <h5 className="text-dark border-top p-2 ">Carga General: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiFillSecurityScan />"{dateCargaGral}"{" "}
      </span>
      <h5 className="text-dark border-top p-2 ">Numero de Cuil: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiFillSecurityScan />"{cuil}"{" "}
      </span>
      <h5 className="text-dark border-top p-2 ">Codigo Postal: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiFillSecurityScan />"{codigoPostal}"{" "}
      </span>
      <h5 className="text-dark border-top p-2 ">Telefono: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiFillSecurityScan />"{telefono}"{" "}
      </span>
      <h5 className="text-dark border-top p-2 ">Localidad: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiFillSecurityScan />"{idLocalidad}"{" "}
      </span>
    </div>
  );
};
