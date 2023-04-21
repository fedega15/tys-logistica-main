const validateForm = (form) => {
  let errors = {};

  if (!form.dateLicConducir.trim()) {
    errors.dateLicConducir = "la dateLicConducir es requerido";
  } else if (String(form.dateLicConducir).trim().length < 5) {
    errors.dateLicConducir = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.apelnomb.trim()) {
    errors.apelnomb = "la apellido y nombre es requerido";
  } else if (String(form.apelnomb).trim().length < 5) {
    errors.apelnomb = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.razonSocial.trim()) {
    errors.razonSocial = "la razon social es requerido";
  } else if (String(form.razonSocial).trim().length < 5) {
    errors.razonSocial = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.direccion.trim()) {
    errors.direccion = "la direccion es requerida";
  } else if (String(form.direccion).trim().length < 5) {
    errors.direccion = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.dateCargaPeligrosa.trim()) {
    errors.dateCargaPeligrosa = "la Carga Peligrosa es requerida";
  } else if (String(form.dateCargaPeligrosa).trim().length < 5) {
    errors.dateCargaPeligrosa = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.dateCargaGral.trim()) {
    errors.dateCargaGral = "la Carga General es requerida";
  } else if (String(form.dateCargaGral).trim().length < 5) {
    errors.dateCargaGral = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.dateRevMedica.trim()) {
    errors.dateRevMedica = "la Revisacion medica es requerida";
  } else if (String(form.dateRevMedica).trim().length < 5) {
    errors.dateRevMedica = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.dateCredPuerto.trim()) {
    errors.dateCredPuerto = "la credencial del puerto es requerida";
  } else if (String(form.dateCredPuerto).trim().length < 5) {
    errors.dateCredPuerto = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.correo) {
    errors.correo = "el correo es requerido";
  } else if (form.correo.length < 5) {
    errors.correo = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.nombrecorto) {
    errors.nombrecorto = "la provincia es requerida";
  } else if (form.nombrecorto.length < 5) {
    errors.nombrecorto = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.nombre) {
    errors.nombre = "el nombre es requerido";
  } else if (form.nombre.length < 5) {
    errors.nombre = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.nomb_empresa) {
    errors.nomb_empresa = "el Nombre de la empresa es requerido";
  } else if (form.nomb_empresa.length < 5) {
    errors.nomb_empresa = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.telefono) {
    errors.telefono = "la localidad es requerido";
  } else if (form.telefono.length < 3) {
    errors.telefono = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.cuil) {
    errors.cuil = "el numero de cuil es requerido";
  } else if (form.cuil.length < 5) {
    errors.cuil = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.codigopostal) {
    errors.codigopostal = "el codigo postal es requerido"; // este debe ser un numero acomodar preg a fede.
  } else if (form.codigopostal.length < 5) {
    errors.codigopostal = "El campo debe ser mayor 5 caracteres";
  }
  
  if (!form.id_chofer) {
    errors.id_chofer = "el id del chofer es requerido"; // este debe ser un numero acomodar preg a fede.
  } else if (form.id_chofer.length < 5) {
    errors.id_chofer = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.id_empresa) {
    errors.id_empresa = "el id de la empresa es requerido"; // este debe ser un numero acomodar preg a fede.
  } else if (form.id_empresa.length < 5) {
    errors.id_empresa = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.id_razonsocial) {
    errors.id_razonsocial = "el id de la razon social es requerido"; // este debe ser un numero acomodar preg a fede.
  } else if (form.id_razonsocial.length < 5) {
    errors.id_razonsocial = "El campo debe ser mayor 5 caracteres";
  }
  
  if (!form.patente.trim()) {
    errors.patente = "la patente es requerido";
  } else if (String(form.patente).trim().length < 5) {
    errors.patente = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.numMotor.trim()) {
    errors.numMotor = "el numero de motor es requerido";
  } else if (String(form.numMotor).trim().length < 3) {
    errors.numMotor = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.numChasis.trim()) {
    errors.numChasis = "el numero de chasis es requerido";
  } else if (String(form.numChasis).trim().length < 5) {
    errors.numChasis = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.numMovil) {
    errors.numMovil = "el numero de movil es requerido"; // este debe ser un numero acomodar preg a fede.
  } else if (form.numMovil.length < 5) {
    errors.numMovil = "El campo debe ser mayor 5 caracteres";
  }
  return errors;
};

export default validateForm;
