import { FaTruckMoving } from "react-icons/fa";
import { HiCog } from "react-icons/hi";
import { AiTwotoneSchedule } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillSecurityScan } from "react-icons/ai";
import { AiFillTags } from "react-icons/ai";

export const Vehicle = ({
  id,
  tipo,
  patente,
  numChasis,
  numMotor,
  numMovil,
  activo,
}) => {
  return (
    <div>
      
      <h5 className="text-dark p-2">Patente: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiTwotoneSchedule />"{patente}"{" "}
      </span>
      
      <h5 className="text-dark border-top p-2 ">Numero de chasis: </h5>
      <span className="text-muted p-2 ">
        {" "}
        <AiFillDashboard />"{numChasis}"{" "}
      </span >
      <h5 className="text-dark border-top p-2">Numero de motor: </h5>
      <span className="text-muted p-2">
        {" "}
        <HiCog />"{numMotor}"{" "}
      </span>
      <h5 className="text-dark border-top p-2 ">Numero de movil: </h5>
      <span className="text-muted p-2">
        <FaTruckMoving /> "{numMovil}"{" "}
      </span>
      <h5 className="text-dark border-top p-2">Tipo de vehiculo: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiFillTags />"{tipo}"{" "}
      </span>
      <h5 className="text-dark border-top p-2">Id de vehiculo: </h5>
      <span className="text-muted p-2">
        {" "}
        <AiFillSecurityScan />"{id}"{" "}
      </span>
     
    </div>
  );
};
