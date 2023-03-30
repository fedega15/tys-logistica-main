import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect} from 'react'
import { getVehicles } from '../../api/Model/Vehicle';
import {handleFetchError} from '../../utils/errorhandler';
import { Vehicle } from '../../components/Vehicle';


const  ListaCamiones1 = () => {
  const [Loading, setLoading] = useState (false)
  const [error, setError] = useState ('')
  const [vehicles, setVehicles] = useState([])

  const handleFetchVehicles = async() => {
    setLoading(true)
  try {
      const api_response = await getVehicles()
      console.log(`Respuesta`)
      console.log(api_response.data)
      if(api_response.status === 200){
        const {data} = api_response 
        setVehicles(data)  
        console.log(data)
        console.log(vehicles)    
      }
      
    } catch (error) {
      console.log(error.response.data.msj)
      const strError = handleFetchError(error)
      setError (strError)
    } 
    finally {
      setLoading(false)
    }
  }
  useEffect (() => {
    handleFetchVehicles()
  },[])
  if(Loading){return (<>Loading..</>)}
  if(error){return (<>{error}</>)}

 
  return (
    <Accordion defaultActiveKey={['0']} 
    alwaysOpen>
       {vehicles.map((vehicle,index)  =>( 
          <Accordion.Item eventKey={index} key={index} >
            <Accordion.Header> <h5 className='fw-semibold'>VEHICULO  {vehicle.id} </h5></Accordion.Header>
            <Accordion.Body className='bg-green'>
            <Vehicle key={vehicle.id} {...vehicle}/>
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion>
  );
}

export default ListaCamiones1;