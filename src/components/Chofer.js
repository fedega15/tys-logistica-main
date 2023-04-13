import { FaTruckMoving } from 'react-icons/fa';
import { HiCog } from 'react-icons/hi';
import { AiTwotoneSchedule } from 'react-icons/ai';
import { AiFillDashboard } from 'react-icons/ai';
import { AiFillSecurityScan } from 'react-icons/ai';
import { AiFillTags } from 'react-icons/ai';

export const Chofer = ({ nomb_empresa, nombre,nombrecorto,activo,id_chofer,id_empresa, id_razonsocial,cuil,direccion,idLocalidad,codigoPostal,telefono,correo,dateRevMedica,dateCargaGral,dateCargaPeligrosa,dateLicConducir,dateCredPuerto,apelnomb,  }) => {
    return (
        <div>
         <h4 className=''>Apellido y Nombre: </h4>
            <span > <AiTwotoneSchedule/>"{apelnomb}" </span>
         <h4 className='border-top  border-primary'>Razon Social: </h4>
            <span> <AiFillDashboard/>"{id_razonsocial}" </span>
        <h4 className='border-top  border-primary'>Correo: </h4>
            <span> <HiCog/>"{correo}" </span>
        <h4 className='border-top  border-primary'>Direccion: </h4>
            <span><FaTruckMoving/> "{direccion}" </span>
        <h4 className='border-top  border-primary'>Revisacion Medica: </h4>
            <span> <AiFillTags/>"{dateRevMedica}" </span>
        <h4 className='border-top border-primary '>Credencial Puerto: </h4>
            <span> <AiFillSecurityScan/>"{dateCredPuerto}" </span>
        <h4 className='border-top border-primary '>Licencia de Conducir: </h4>
            <span> <AiFillSecurityScan/>"{dateLicConducir}" </span>
        <h4 className='border-top border-primary '>Carga Peligrosa: </h4>
            <span> <AiFillSecurityScan/>"{dateCargaPeligrosa}" </span>
        <h4 className='border-top border-primary '>Carga General: </h4>
            <span> <AiFillSecurityScan/>"{dateCargaGral}" </span>
        <h4 className='border-top border-primary '>Numero de Cuil: </h4>
            <span> <AiFillSecurityScan/>"{cuil}" </span>
        <h4 className='border-top border-primary '>Codigo Postal: </h4>
            <span> <AiFillSecurityScan/>"{codigoPostal}" </span>
        <h4 className='border-top border-primary '>Telefono: </h4>
            <span> <AiFillSecurityScan/>"{telefono}" </span>
        <h4 className='border-top border-primary '>Localidad: </h4>
            <span> <AiFillSecurityScan/>"{idLocalidad}" </span>
            <h4 className='border-top border-primary'><br></br></h4>    
            </div>
    )
}