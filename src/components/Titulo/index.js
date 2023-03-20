import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';

function Title() {
  const location = useLocation()
 
  return (
    <Container fluid className='bg-secondary bg-gradient text-white ' 
      style= {{display:'flex', justifyContent:'center', height: '60px', fontSize: '1.6rem', color:"white", background:"gray"}} >
        <div >
          <h1 className='fw-bold'> 
            {location.pathname === `/` ? "Lista de camiones" : location.pathname === `/AgregarCamiones` ? "Agrega tu camion" : location.pathname === `/login` ? "Inicia sesion" : ""} 
          </h1>
        </div>
    </Container>
  );
}

export default Title; 