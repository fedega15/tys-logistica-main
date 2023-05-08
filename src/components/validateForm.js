const validateForm = (form) => {
  let errors = {};

  if (!form.dateLicConducir) {
    errors.dateLicConducir = "la dateLicConducir es requerido";
  } else if (form.dateLicConducir.length < 5) {
    errors.dateLicConducir = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.apelnomb) {
    errors.apelnomb = "la apellido y nombre es requerido";
  } else if (form.apelnomb.length < 5) {
    errors.apelnomb = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.razonSocial) {
    errors.razonSocial = "la razon social es requerido";
  } else if (form.razonSocial.length < 5) {
    errors.razonSocial = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.direccion) {
    errors.direccion = "la direccion es requerida";
  } else if (form.direccion.length < 5) {
    errors.direccion = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.dateCargaPeligrosa) {
    errors.dateCargaPeligrosa = "la Carga Peligrosa es requerida";
  } else if (form.dateCargaPeligrosa.length < 5) {
    errors.dateCargaPeligrosa = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.dateCargaGral) {
    errors.dateCargaGral = "la Carga General es requerida";
  } else if (form.dateCargaGral.length < 5) {
    errors.dateCargaGral = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.dateRevMedica) {
    errors.dateRevMedica = "la Revisacion medica es requerida";
  } else if (form.dateRevMedica.length < 5) {
    errors.dateRevMedica = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.cuil) {
    errors.cuil = "el numero de cuil es requerido";
  } else if (form.cuil.length < 5) {
    errors.cuil = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.dateCredPuert) {
    errors.dateCredPuerto = "la credencial del puerto es requerida";
  } else if (form.dateCredPuerto.length < 5) {
    errors.dateCredPuerto = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.correo) {
    errors.correo = "el correo es requerido";
  } else if (form.correo.length < 5) {
    errors.correo = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.telefono) {
    errors.telefono = "la localidad es requerido";
  } else if (form.telefono.length < 3) {
    errors.telefono = "El campo debe ser mayor 5 caracteres";
  }
  if (!form.codigoPostal) {
    errors.codigoPostal = "el codigo postal es requerido"; // este debe ser un numero acomodar preg a fede.
  } else if (form.codigoPostal.length < 5) {
    errors.codigoPostal = "El campo debe ser mayor 5 caracteres";
  }

  return errors;
};

export default validateForm;
