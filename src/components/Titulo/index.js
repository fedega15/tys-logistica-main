import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";

function Title() {
  const location = useLocation();

  return (
    <Container
      fluid
      className="bg-success bg-opacity-75 text-white "
      style={{
        display: "flex",
        justifyContent: "center",
        height: "60px",
        fontSize: "1.6rem",
        color: "white",
        background: "#e6e6e6",
      }}
    >
      <div>
        <h1 className="fw-bold bg-succes">
          {location.pathname === `/`
            ? "Lista de vehiculos"
            : location.pathname === `/AgregarCamiones`
            ? "Agrega tu vehiculos"
            : location.pathname === `/login`
            ? "Inicia sesion"
            : location.pathname === `/Registro`
            ? "Registro"
            : location.pathname === `/Choferes`
            ? "Choferes"
            : location.pathname === `/CrearChofer`
            ? "Agrega tu chofer"
            : ""}
        </h1>
      </div>
    </Container>
  );
}

export default Title;
