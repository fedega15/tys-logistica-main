import { FaTruckMoving } from "react-icons/fa";
import { HiCog } from "react-icons/hi";
import { AiTwotoneSchedule } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillSecurityScan } from "react-icons/ai";
import { AiFillTags } from "react-icons/ai";
import { parseISO, addDays, isWithinInterval } from "date-fns";
import "./color.css";

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
  const today = new Date(); // aca pongo fecha

  let color = "";
  const RevMedica = dateRevMedica ? parseISO(dateRevMedica) : null;
  const CargaGral = dateCargaGral ? parseISO(dateCargaGral) : null;
  const CargPeligrosa = dateCargaPeligrosa
    ? parseISO(dateCargaPeligrosa)
    : null;
  const LicConducir = dateLicConducir ? parseISO(dateLicConducir) : null;

  const daysDifference =
    RevMedica && CargaGral && CargPeligrosa && LicConducir
      ? Math.ceil((RevMedica - today) / (1000 * 60 * 60 * 24))
      : null;
  console.log(RevMedica);
  console.log(CargaGral);
  console.log(CargPeligrosa);
  console.log(LicConducir);

  if (daysDifference < 0) {
    color = "red"; // Se venció
  } else if (daysDifference <= 30) {
    color = "yellow"; // Próximo a vencerse (dentro de 30 días)
  } else if (
    isWithinInterval(today, { start: today, end: addDays(today, 60) })
  ) {
    color = "blue"; // Vence dentro de 2 meses
  }

  console.log(color); // Imprimir el color en la consola
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
      <span className={`bg-${color} p-2`}>
        {" "}
        <AiFillTags />"{dateRevMedica}"{" "}
      </span>
      <h5 className="text-dark border-top p-2 ">Credencial Puerto: </h5>
      <span className={`bg-${color} p-2`}>
        {" "}
        <AiFillSecurityScan />"{dateCredPuerto}"{" "}
      </span>
      <h5 className="text-dark border-top p-2 ">Licencia de Conducir: </h5>
      <span className={`bg-${color} p-2`}>
        {" "}
        <AiFillSecurityScan />"{dateLicConducir}"{" "}
      </span>
      <h5 className="text-dark border-top p-2 ">Carga Peligrosa: </h5>
      <span className={`bg-${color} p-2`}>
        {" "}
        <AiFillSecurityScan />"{dateCargaPeligrosa}"{" "}
      </span>
      <h5 className="text-dark border-top p-2 ">Carga General: </h5>
      <span className={`bg-${color} p-2`}>
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
        <AiFillSecurityScan />"{codigopostal}"{" "}
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
