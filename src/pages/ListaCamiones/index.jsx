import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect} from 'react'
import { getVehicles } from '../../api/Model/Vehicle';
import {handleFetchError} from '../../utils/errorhandler';
import { Vehicle } from '../../components/Vehicle';




const  ListaCamiones1 = () => {
  const [Loading, setLoading] = useState (false)
  const [error, setError] = useState ('')
  const [vehicles, setVehicles] = useState([])
  const [search, setSearch] = useState("")

  const handleFetchVehicles = async() => {
    setLoading(true)
  try {
      const api_response = await getVehicles()
      // console.log(`Respuesta`)
       console.log(api_response.data)
      if(api_response.status === 200){
        const {data} = api_response 
        setVehicles(data)  
       // console.log(data)
       // console.log(vehicles)  // aca me da vacio  
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
  
  const searcher = (e) => {
    setSearch(e.target.value);
    
  }    

  let results = []

  if (!search)
  {
    results = vehicles
    
  }else {
    results = vehicles.filter((dato) => 
    dato.numChasis.toLowerCase().includes(search.toLocaleLowerCase())
    )
  }
   // puedo cambiar apelnomb y buscar lo q quiera
  useEffect (() => {
    handleFetchVehicles()
  },[])
  if(Loading){return (<>Loading..</>)}
  if(error){return (<>{error}</>)}

 
  return (
    <div>
         <form className='d-flex justify-content-center gap-4 p-2 ' style={{
        backgroundColor: "#e6e6e6",}}>
        <div className='w-25'> <input value={search} onChange={searcher} className="w-100 p-2" placeholder='Buscar por numero de chasis...' type="text" /></div>
    </form>

    <Accordion defaultActiveKey={['0']} 
    alwaysOpen>
       {results.map((vehicle,index)  =>( 
          <Accordion.Item eventKey={index} key={index} >
            <Accordion.Header> <h5 className='font-italic text-dark'>VEHICULO  {vehicle.id} </h5></Accordion.Header>
            <Accordion.Body className='bg-green'>
            <Vehicle key={vehicle.id} {...vehicle}/>
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion>
    </div>
  );
}

export default ListaCamiones1;