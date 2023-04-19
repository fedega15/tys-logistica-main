import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useLocation, Link } from "react-router-dom";
const Breadcrumbs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const hideLogin =
    currentPath === "/AgregarCamiones" ||
    currentPath === "/" ||
    currentPath === "/CrearChofer" ||
    currentPath === "/Choferes";
  const hideLogin2 = currentPath === "/login";
  const hideLogin3 = currentPath === "/Registro";

  return (
    <Breadcrumb className="p-0"
      style={{
        
        backgroundColor: "#198754",
        display: "flex",
        alignItems: "center",
        height: "100%",
        padding:"0px",
        gap:"0px",
      }}
    >
      {!hideLogin && (
        <Link
          to="/login"
          className={`breadcrumb-item ${
            currentPath === "/login" ? "text-white-50" : "text-light"
          }`}
          style={{ textDecoration: "none" }}
        >
           Iniciar sesión
        </Link>
      )}
      {!hideLogin && (
        <Link
          to="/Registro"
          className={`breadcrumb-item ${
            currentPath === "/Registro" ? "text-white-50" : "text-light"
          }`}
          style={{ textDecoration: "none" }}
        >
          /  Registro
        </Link>
      )}
      {!hideLogin2 && !hideLogin3 && (
        <Link
          to="/"
          className={`breadcrumb-item ${
            currentPath === "/" ? "text-white-50" : "text-light"
          }`}
          style={{ textDecoration: "none" }}
        >
         Lista de vehiculos
        </Link>
      )}
      {!hideLogin2 && !hideLogin3 && (
        <Link
          to="/AgregarCamiones"
          className={`breadcrumb-item ${
            currentPath === "/AgregarCamiones"
              ? "text-white-50"
              : "text-light"
          }`}
          style={{ textDecoration: "none" }}
        >
        / Crear vehiculo
        </Link>
      )}
      {!hideLogin2 && !hideLogin3 && (
        <Link
          to="/Choferes"
          className={`breadcrumb-item ${
            currentPath === "/Choferes" ? "text-white-50" : "text-light"
          }`}
          style={{ textDecoration: "none" }}
        >
          / Choferes
        </Link>
      )}
      {!hideLogin2 && !hideLogin3 && (
        <Link
          to="/CrearChofer"
          className={`breadcrumb-item ${
            currentPath === "/CrearChofer" ? "text-white-50" : "text-light"
          }`}
          style={{ textDecoration: "none" }}
        >
         / Crear chofer
        </Link>
      )}
    </Breadcrumb>
  );
};
export default Breadcrumbs;
/*
const Breadcrumbs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Breadcrumb>
      <Link to="/login" className={`breadcrumb-item ${currentPath === "/login" ? "text-primary" : "text-secondary"}`}style={{textDecoration: "none"}}>Iniciar sesión</Link>
      <Link to="/" className={`breadcrumb-item ${currentPath === "/" ?"text-primary" : "text-secondary"}`} active={currentPath === "/"}style={{textDecoration: "none"}}>Lista de camiones</Link>
      <Link to="/AgregarCamiones" className={`breadcrumb-item ${currentPath === "/AgregarCamiones" ? "text-primary" : "text-secondary"}`}style={{textDecoration: "none"}}>Agregar camión</Link>
    </Breadcrumb>
  );
};

export default Breadcrumbs;*/
