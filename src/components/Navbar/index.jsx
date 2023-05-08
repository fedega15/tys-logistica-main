import logopng from "./logo.png";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { RiLoginBoxFill } from "react-icons/ri";
import { BsFillPersonPlusFill, BsPlusSquareFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { useState } from "react";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const showLoginAndRegisterLinks =
    location.pathname === "/login" || location.pathname === "/Registro";
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          onToggle={() => setIsOpen(!isOpen)}
          expanded={isOpen}
          key={expand}
          bg="light"
          expand={expand}
        >
          <Container fluid style={{ height: "70px" }}>
            <Navbar.Brand
              className="d-flex justify-content-center"
              style={{ height: "60px" }}
              href="/"
            >
              <img
                src={logopng}
                style={{ marginRight: "10px", width: "47px", height: "48px" }}
                alt=""
              />
              <h1 className="fw-semibold">Logistica TyS</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="h-12">
                <Offcanvas.Title
                  className="fw-semibold fs-2"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  <img
                    src={logopng}
                    style={{
                      marginRight: "20px",
                      width: "36px",
                      height: "34px",
                      marginTop: "-10px",
                    }}
                    alt=""
                  />
                  Logistica TyS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {showLoginAndRegisterLinks && (
                    <>
                      <Link
                        onClick={() => setIsOpen(false)}
                        className=" text-dark fw-bolder border-bottom border-secondary border-top p-2 pb-4"
                        to="/login"
                        style={{ textDecoration: "none" }}
                      >
                        <RiLoginBoxFill className="text-dark" /> Inicia sesión
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        className="text-dark fw-bolder border-bottom border-secondary p-2 pb-4"
                        to="/Registro"
                        style={{ textDecoration: "none" }}
                      >
                        <BsFillPersonPlusFill className="text-secondary" />{" "}
                        Registro
                      </Link>
                    </>
                  )}
                  {!showLoginAndRegisterLinks && (
                    <>
                      <Link
                        onClick={() => setIsOpen(false)}
                        className=" text-dark fw-bolder border-bottom border-secondary p-2 pb-4"
                        to="/"
                        style={{ textDecoration: "none" }}
                      >
                        <FaListAlt className="text-secondary" /> Vehiculos
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        className=" text-dark fw-bolder border-bottom border-secondary p-2 pb-4"
                        to="/Choferes"
                        style={{ textDecoration: "none" }}
                      >
                        <FaListAlt className="text-secondary" /> Choferes
                      </Link>

                      <Link
                        onClick={() => setIsOpen(false)}
                        className=" text-dark fw-bolder border-bottom border-secondary p-2 pb-4"
                        to="/AgregarCamiones"
                        style={{ textDecoration: "none" }}
                      >
                        <BsPlusSquareFill className="text-secondary" /> Crear
                        vehiculo
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        className=" text-dark fw-bolder border-bottom border-secondary p-2 pb-4"
                        to="/CrearChofer"
                        style={{ textDecoration: "none" }}
                      >
                        <BsFillPersonPlusFill className="text-secondary" />{" "}
                        Crear chofer
                      </Link>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navbar1;
