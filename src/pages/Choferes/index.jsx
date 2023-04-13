import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect} from 'react'
import { getChofer } from '../../api/Model/Chofer';
import {handleFetchError} from '../../utils/errorhandler';
import { Chofer } from '../../components/Chofer';




const  Choferes = () => {
  const [Loading, setLoading] = useState (false)
  const [error, setError] = useState ('')
  const [choferes, setChoferes] = useState([])

  const handleFetchChoferes = async() => {
    setLoading(true)
  try {
      const api_response = await getChofer()
      console.log(`Respuesta`)
      console.log(api_response.data) // perfecto recibo un array
      if(api_response.status === 200){
        const {data} = api_response 
        setChoferes(data) 
        console.log (data)
        console.log(choferes) 
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
    <div>
    {choferes.length > 0 ? (
      <ul>
        {choferes.map((chofer) => (
          <li key={chofer.id}>{chofer.nombre}</li>
        ))}
      </ul>
    ) : (
      <p>No se encontraron choferes</p>
    )}
  </div>
   
   /* <Accordion defaultActiveKey={['0']} 
    alwaysOpen>
       {choferes.map((chofer,index)  =>( 
          <Accordion.Item eventKey={index} key={index} >
            <Accordion.Header> <h5 className='fw-semibold'>CHOFER  {chofer.id} </h5></Accordion.Header>
            <Accordion.Body className='bg-green'>
            <Chofer key={chofer.id} {...chofer}/>
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion> */
  );
}

export default Choferes;