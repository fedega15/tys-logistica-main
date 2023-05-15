import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import { getChofer } from "../../api/Model/Chofer";
import { handleFetchError } from "../../utils/errorhandler";
import { Chofer } from "../../components/Chofer";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
import { parseISO, addDays, isWithinInterval } from 'date-fns';
import './color.css'

const Choferes = () => {
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [driver, setDriver] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleFetchChoferes = async () => {
    setLoading(true);

    try {
      const api_response = await getChofer();
      // console.log(`Respuesta`);
      // console.log(api_response.data); // perfecto recibo un array
      if (api_response.status === 201) {
        const { data } = api_response;
        setDriver(data);
        // console.log(driver);
      }
    } catch (error) {
      console.log(error.response.data.msj);
      const strError = handleFetchError(error);
      setError(strError);
    } finally {
      setLoading(false);
    }
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = [];

  if (!search) {
    results = driver;
  } else {
    results = driver.filter((dato) =>
      dato.apelnomb.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  const exportToExcel = (e) => {
    e.preventDefault();
    const worksheet = XLSX.utils.json_to_sheet(results || driver);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Choferes");
    XLSX.writeFile(workbook, "choferes.xlsx");
  };

  useEffect(() => {
    handleFetchChoferes();
  }, []);
  if (Loading) {
    return <>Loading..</>;
  }
  if (error) {
    return <>{error}</>;
  }
  
  const HandleModificar = (driver) => {
    // console.log(vehicle);
    navigate("/CrearChofer", { state: driver });
  };

  return (
    <div>
      <form
        className="d-flex justify-content-center gap-4 p-2"
        style={{
          backgroundColor: "#e6e6e6",
        }}
      >
        <div className="w-25">
          {" "}
          <input
            value={search}
            onChange={searcher}
            className="w-100 p-2"
            placeholder="Busca por nombre y apellido..."
            type="text"
          />
        </div>
        <div>
          <button onClick={exportToExcel}>Exportar esta lista a Excel</button>
        </div>
      </form>

      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        {results.map((driver, index) =>{
          const today = new Date(); // Fecha actual

          // Calcular la diferencia en días y asignar color según estado de vencimiento
          let color = '';
          const dateRevMedica = parseISO(driver.dateRevMedica); // Convertir la fecha de vencimiento a objeto de fecha
          const daysDifference = Math.ceil((dateRevMedica - today) / (1000 * 60 * 60 * 24)); // Calcular la diferencia en días
          
          if (daysDifference < 0) {
            color = 'red'; // Se venció
          } else if (daysDifference <= 30) {
            color = 'yellow'; // Próximo a vencerse (dentro de 30 días)
          } else if (isWithinInterval(dateRevMedica, { start: today, end: addDays(today, 60) })) {
            color = 'blue'; // Vence dentro de 2 meses
          }
          console.log(color)
          return (
          <Accordion.Item eventKey={index.toString()} key={`driver-${driver.id_chofer}`}>
            <Accordion.Header>
              <div>
              {" "}
              <h5 className="fw-semibold">CHOFER {driver.nombre} </h5>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-end">
                <span
                  onClick={() => HandleModificar(driver)}
                  className="btn btn-secondary m-3  "
                >
                  Modificar
                </span>
              </div>
            </Accordion.Header>
            <Accordion.Body /* className={`bg-${color}`}*/>
              <Chofer key={`driver-${driver.id_chofer}`} {...driver} />
            </Accordion.Body>
          </Accordion.Item>
        )
})}
      </Accordion>
    </div>
  );
};

export default Choferes;
