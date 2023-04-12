import { FaTruckMoving } from 'react-icons/fa';
import { HiCog } from 'react-icons/hi';
import { AiTwotoneSchedule } from 'react-icons/ai';
import { AiFillDashboard } from 'react-icons/ai';
import { AiFillSecurityScan } from 'react-icons/ai';
import { AiFillTags } from 'react-icons/ai';

export const Vehicle = ({ id, tipo, patente, numChasis, numMotor, numMovil, activo  }) => {
    return (
        <div>
         <h4 className=''>Patente: </h4>
            <span > <AiTwotoneSchedule/>"{patente}" </span>
         <h4 className='border-top  border-primary'>Numero de chasis: </h4>
            <span> <AiFillDashboard/>"{numChasis}" </span>
        <h4 className='border-top  border-primary'>Numero de motor: </h4>
            <span> <HiCog/>"{numMotor}" </span>
        <h4 className='border-top  border-primary'>Numero de movil: </h4>
            <span><FaTruckMoving/> "{numMovil}" </span>
        <h4 className='border-top  border-primary'>Tipo de vehiculo: </h4>
            <span> <AiFillTags/>"{tipo}" </span>
        <h4 className='border-top border-primary '>Id de vehiculo: </h4>
            <span> <AiFillSecurityScan/>"{id}" </span>
            <h4 className='border-top border-primary'><br></br></h4>
           
            
            </div>
    )
}