import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useLocation, Link } from 'react-router-dom';
const Breadcrumbs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const hideLogin = currentPath === "/AgregarCamiones" || currentPath === "/";
  const hideLogin2 = currentPath === "/login" 
  const hideLogin3 = currentPath === "/Registro"
  
  return (
    <Breadcrumb style={{ backgroundColor: "#e6e6e6", display: "flex", alignItems: "center", height: "100%" }}>
    {!hideLogin && (
      <Link to="/login" className={`breadcrumb-item ${currentPath === "/login" ? "text-primary" : "text-secondary"}`} style={{ textDecoration: "none" }}>Iniciar sesión</Link>
    )}
    {!hideLogin2 && !hideLogin3 && (
      <Link to="/" className={`breadcrumb-item ${currentPath === "/" ? "text-primary" : "text-secondary"}`} style={{ textDecoration: "none" }}>Lista de camiones</Link>
    )}
    {!hideLogin2 && !hideLogin3 && (
      <Link to="/AgregarCamiones" className={`breadcrumb-item ${currentPath === "/AgregarCamiones" ? "text-primary" : "text-secondary"}`} style={{ textDecoration: "none" }}>Agregar camión</Link>
    )}
    {!hideLogin && (
      <Link to="/Registro" className={`breadcrumb-item ${currentPath === "/Registro" ? "text-primary" : "text-secondary"}`} style={{ textDecoration: "none" }}>Registro</Link>
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