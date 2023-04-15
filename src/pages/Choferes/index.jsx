import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect} from 'react'
import { getChofer } from '../../api/Model/Chofer';
import {handleFetchError} from '../../utils/errorhandler';
import { Chofer } from '../../components/Chofer';



const  Choferes = () => {
  const [Loading, setLoading] = useState (false)
  const [error, setError] = useState ('')
  const [driver, setDriver] = useState([])

  const handleFetchChoferes = async() => {
    setLoading(true)
    
  try {
      const api_response = await getChofer()
      console.log(`Respuesta`)
      console.log(api_response.data) // perfecto recibo un array
      if(api_response.status === 201){
        const {data} = api_response 
        setDriver(data) 
        console.log(data)
        console.log(driver) 
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
    handleFetchChoferes()
  },[])
  if(Loading){return (<>Loading..</>)}
  if(error){return (<>{error}</>)}

 
  return (
  
   
    <Accordion defaultActiveKey={['0']} 
    alwaysOpen>
       {driver.map((driver,index)  =>( 
          <Accordion.Item eventKey={index} key={index} >
            <Accordion.Header> <h5 className='fw-semibold'>CHOFER  {driver.nombre} </h5></Accordion.Header>
            <Accordion.Body className='bg-green'>
            <Chofer key={driver.id_chofer} {...driver}/>
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion> 
  );
}

export default Choferes;