import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from '../../hooks/useForm'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CrearChofer } from '../../api/Model/Chofer'
import validateForm from '../../components/validateForm'

const initialForm = {
  razonSocial: "",
  cuil:"",
  direccion: "",
  idLocalidad:"",
  codigoPostal:"",
  telefono: "",
  correo: "",
  dateRevMedica:"",
  dateCargaGrl: "",
  dateCargaPeligrosa:"",
  dateLicConducir: "",
  dateCredPuerto: "",
  apelnomb: "",
}

const CrearChoferes = () => {
  const {
    form,
    errors,
    handleChange,
    handleBlur, 
    handleSubmit,
} = useForm(initialForm, validateForm)

const [sending, setSending] = useState(false);
const [sent, setSent] = useState(false);
  
const handleFetch = async (e) => {
  try {
      e.preventDefault()
      if (errors.hasOwnProperty('razonSocial')
          ||errors.hasOwnProperty('cuil')
          ||errors.hasOwnProperty('telefono')
          ||errors.hasOwnProperty('codigoPostal')
         ){
          //hay errores
          console.log(errors)
          return false
      }
      setSending(true);
      const api_response = await CrearChofer(form)
      setSending(false)
     
      if (api_response.status === 200) {
          const { data } = api_response
          console.log(data)
          
      }
      setSending(false);
      setSent(true);
  } catch (error) {
          console.log(error)
          setSending(false)
  }
}
  return (
    <div className="container">

      <div className="col-md-12 mt-5">
        <form onSubmit={handleSubmit}>
          <h4 className="mb-3">Carga los datos</h4>

          <div className="row">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Apellido y Nombre:</label>
              <input 
              type='text'
              name="apelnomb"
              placeholder="gustavo witz"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.apelnomb} />
            {errors.apelnomb && <p className='text-danger'>{errors.apelnomb}</p>}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Razon Social:</label>
              <input 
              type='text'
              name="razonSocial"
              placeholder="s.a sa"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.razonSocial} />
            {errors.razonSocial && <p className='text-danger'>{errors.razonSocial}</p>}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Correo:</label>
              <input 
              type='text'
              name="correo"
              placeholder="gustavo witz"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.correo} />
            {errors.correo && <p className='text-danger'>{errors.correo}</p>}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Direccion:</label>
              <input 
              type='text'
              name="direccion"
              placeholder="gustavo witz"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.direccion} />
            {errors.direccion && <p className='text-danger'>{errors.direccion}</p>}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Revisacion Medica:</label>
              <input 
              type='text'
              name="dateRevMedica"
              placeholder="gustavo witz"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.dateRevMedica} />
            {errors.dateRevMedica && <p className='text-danger'>{errors.dateRevMedica}</p>}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Credencial Puerto:</label>
              <input 
              type='text'
              name="dateCredPuerto"
              placeholder="gustavo witz"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.dateCredPuerto} />
            {errors.dateCredPuerto && <p className='text-danger'>{errors.dateCredPuerto}</p>}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Licencia de Conducir:</label>
              <input 
              type='text'
              name="dateLicConducir"
              placeholder="gustavo witz"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.dateLicConducir} />
            {errors.dateLicConducir && <p className='text-danger'>{errors.dateLicConducir}</p>}
            </div>

            <div className="form-group col-md-6 mb-3">
              <label htmlFor="lastname">Carga Peligrosa:</label>
              <input 
               type='text'
                name="dateCargaPeligrosa"
               placeholder="20-40454618-0"
               onChange={handleChange}
               onBlur={handleBlur}
               value={form.dateCargaPeligrosa} />
               {errors.dateCargaPeligrosa && <p className='text-danger'>{errors.dateCargaPeligrosa}</p>}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="lastname">Carga General:</label>
              <input 
               type='text'
                name="dateCargaGrl"
               placeholder="20-40454618-0"
               onChange={handleChange}
               onBlur={handleBlur}
               value={form.dateCargaGrl} />
               {errors.dateCargaGrl && <p className='text-danger'>{errors.dateCargaGrl}</p>}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="lastname">Numero de cuil:</label>
              <input 
               type='number'
                name="cuil"
               placeholder="20-40454618-0"
               onChange={handleChange}
               onBlur={handleBlur}
               value={form.cuil} />
               {errors.cuil && <p className='text-danger'>{errors.cuil}</p>}
            </div>
          
       

          <div className="form-group col-md-6 mb-3 ">
            <label htmlFor="telefono">Telefono:</label>
            <input 
             type='number'
             name="telefono"
             placeholder="6680465"
             onChange={handleChange}
             onBlur={handleBlur}
             value={form.telefono} />
          {errors.telefono && <p className='text-danger'>{errors.telefono}</p>}
          </div>
          <div className="form-group col-md-6 mb-3">
            
            <label htmlFor="email">Codigo Postal:</label>
            <input 
             type='number'
             name="codigoPostal"
             placeholder="2000"
             onChange={handleChange}
             onBlur={handleBlur}
             value={form.codigoPostal}
               />
               {errors.codigoPostal && <p className='text-danger'>{errors.codigoPostal}</p>}
          </div>
          </div>

          <div className="row">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="country">Tipo</label>
              <select 
                type="number"
                className="custom-select d-block w-100" 
                id="tipo" 
                name="tipo"
                onChange={handleChange}
                value={form.tipo}>
                <option value="">Opciones...</option>
                <option value={1}>Camion</option>
                <option value={2}>Acoplado</option>
                <option value={3}>Camion + Acoplado</option>
              </select>
            </div>

            <div className="form-group col-md-6 mb-3 color">
              <label htmlFor="state">Localidad</label>
              <select 
                className="custom-select d-block w-100" 
                type="text"
                id="idLocalidad" 
                name="idLocalidad"
                onChange={handleChange}
                value={form.id}>
                <option value="">Opciones...</option>
                <option value={1}>Provincia</option>
                <option value={2}>Localidad</option>
                <option value={3}>3</option>
              </select>
            </div>
          </div>
          <div className="form-group">
          <button onClick={handleFetch} disabled={sending || sent  } >
          {sending ? "Enviando..." : sent ? "Enviado" : "Enviar"}
              {sent ? <span>&#10003;</span> : ""}
          </button>
          </div>
             {sent && <p className="text-success"> Tu vehiculo se añadio a :<Link className="fw-bolder border-bottom border-secondary p-2 pb-4" to="/">Lista camiones</Link></p>}
        </form>
      </div>
    </div>
  )
}
export default CrearChoferes