
const validateForm = (form) => {
    let errors = {}
  
    if (!form.dateLicConducir.trim()) {
        errors.dateLicConducir = "la dateLicConducir es requerido"
    } else if (String(form.dateLicConducir).trim().length < 5) {
        errors.dateLicConducir = "El campo debe ser mayor 5 caracteres"
    }
    if (!form.apelnomb.trim()) {
        errors.apelnomb = "la apellido y nombre es requerido"
    } else if (String(form.apelnomb).trim().length < 5) {
        errors.apelnomb = "El campo debe ser mayor 5 caracteres"
    }
    if (!form.razonSocial.trim()) {
        errors.razonSocial = "la razon social es requerido"
    } else if (String(form.razonSocial).trim().length < 5) {
        errors.razonSocial = "El campo debe ser mayor 5 caracteres"
    }
    if (!form.direccion.trim()) {
        errors.direccion = "la direccion es requerida"
    } else if (String(form.direccion).trim().length < 5) {
        errors.direccion = "El campo debe ser mayor 5 caracteres"
    }
    if (!form.dateCargaPeligrosa.trim()) {
        errors.dateCargaPeligrosa = "la Carga Peligrosa es requerida"
    } else if (String(form.dateCargaPeligrosa).trim().length < 5) {
        errors.dateCargaPeligrosa = "El campo debe ser mayor 5 caracteres"
    }
    if (!form.dateCargaGrl.trim()) {
        errors.dateCargaGrl = "la Carga General es requerida"
    } else if (String(form.dateCargaGrl).trim().length < 5) {
        errors.dateCargaGrl = "El campo debe ser mayor 5 caracteres"
    }
    if (!form.dateRevMedica.trim()) {
        errors.dateRevMedica = "la Revizacion medica es requerida"
    } else if (String(form.dateRevMedica).trim().length < 5) {
        errors.dateRevMedica = "El campo debe ser mayor 5 caracteres"
    }
    if (!form.dateCredPuerto.trim()) {
        errors.dateCredPuerto = "la credencial del puerto es requerida"
    } else if (String(form.dateCredPuerto).trim().length < 5) {
        errors.dateCredPuerto = "El campo debe ser mayor 5 caracteres"
    }
    if (!form.correo) {
        errors.correo = "el correo es requerido"
    } else if ((form.correo).length < 5) {
        errors.correo = "El campo debe ser mayor 5 caracteres"
    }
    if (!form.telefono) {
        errors.telefono = "la localidad es requerido"
    } else if ((form.telefono).length < 3) {
        errors.telefono = "El campo debe ser mayor 5 caracteres"
    }
    if (!form.cuil) {
      errors.cuil = "el numero de cuil es requerido"
    } else if ((form.cuil).length < 5) {
      errors.cuil = "El campo debe ser mayor 5 caracteres"
    }
    if (!form.codigoPostal) {
      errors.codigoPostal = "el codigo postal es requerido" // este debe ser un numero acomodar preg a fede.
    } else if ((form.codigoPostal).length < 5) {
      errors.codigoPostal = "El campo debe ser mayor 5 caracteres"
    }
    return errors
  }

  export default validateForm;