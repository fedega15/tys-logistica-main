import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logopng from "./logo.png"
import {RiLoginBoxFill } from "react-icons/ri"
import {FaListAlt } from "react-icons/fa"
import {BsPlusSquareFill } from "react-icons/bs"
import {BsFillPersonPlusFill } from "react-icons/bs"

const Navbar1 = () => {
  return (
    <>
      {[false,].map((expand) => (
        <Navbar key={expand} bg="light"  expand={expand} >
          <Container fluid style={{ height:"70px"}}>

          <Navbar.Brand className='d-flex justify-content-center' style={{height:"60px"}} href="/"><br/> 
              <img src={logopng} style={{ marginRight : '10px' ,width: '47px', height: '48px',  }} alt="" />
              <h1 className='fw-semibold' >Logistica TyS</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header  closeButton className='h-12'>
                <Offcanvas.Title className='fw-semibold fs-2' id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={logopng} style={{ marginRight : '20px', width: '36px', height: '34px',marginTop:"-10px"  }} alt="" />
                  Logistica TyS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="fw-bolder border-bottom border-secondary border-top p-2 pb-4 " href="/login"> <RiLoginBoxFill/> Inicia sesion</Nav.Link>
                  <Nav.Link className="fw-bolder border-bottom border-secondary p-2 pb-4" href="/"> <FaListAlt/> Lista camiones</Nav.Link>
                  <Nav.Link className=" fw-bolder border-bottom border-secondary p-2 pb-4" href="/AgregarCamiones"> <BsPlusSquareFill/> Agrega tu camion</Nav.Link>
                  <Nav.Link className=" fw-bolder border-bottom border-secondary p-2 pb-4" href="/Registro"> <BsFillPersonPlusFill/> Registro</Nav.Link>
                  
                  
                
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbar1;