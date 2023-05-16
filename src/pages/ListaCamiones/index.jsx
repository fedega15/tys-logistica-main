import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import { getVehicles } from "../../api/Model/Vehicle";
import { handleFetchError } from "../../utils/errorhandler";
import { Vehicle } from "../../components/Vehicle";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const ListaCamiones1 = () => {
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate(); 

  const handleFetchVehicles = async () => {
    setLoading(true);
    try {
      const api_response = await getVehicles();
      // console.log(api_response.data);
      if (api_response.status === 200) {
        const { data } = api_response;
        setVehicles(data);
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
    results = vehicles;
  } else {
    results = vehicles.filter((dato) =>
      dato.numChasis.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  const exportToExcel = (e) => {
    e.preventDefault();
    const worksheet = XLSX.utils.json_to_sheet(results || vehicles);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "vehiculos");
    XLSX.writeFile(workbook, "vehiculos.xlsx");
  };
  useEffect(() => {
    handleFetchVehicles();
  }, []);

  if (Loading) {
    return <>Loading..</>;
  }
  if (error) {
    return <>{error}</>;
  }

  const HandleModificar = (vehicle) => {
    // console.log(vehicle);
    navigate("/AgregarCamiones", { state: vehicle });
  };

  return (
    <div>
      <form
        className="d-flex justify-content-center gap-4 p-2 "
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
            placeholder="Buscar por numero de chasis..."
            type="text"
          />
        </div>
        <div>
          <button onClick={exportToExcel}>Exportar esta lista a Excel</button>
        </div>
      </form>

      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        {results.map((vehicle, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>
              <div style={{ width: '400px',}}>
                {" "}
                <h5 className="font-italic text-dark">
                  VEHICULO {vehicle.id}{" "}
                </h5>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-end">
                <span
               style={{ position: 'relative', left: '1000px',}}
                  onClick={() => HandleModificar(vehicle)}
                  className="btn btn-secondary m-3  "
                >
                  Modificar
                </span>
              </div>
            </Accordion.Header>
            <Accordion.Body  style={{
          backgroundColor: "#e6e6e6",
        }}className="bg-green">
              <Vehicle key={vehicle.id} {...vehicle} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default ListaCamiones1;
