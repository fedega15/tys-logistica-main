
const validateVehiculo = (form) => {
    let errors = {};
  
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
  export default validateVehiculo