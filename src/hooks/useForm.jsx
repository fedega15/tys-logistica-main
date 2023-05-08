import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState(
    Object.keys(initialForm).reduce((obj, key) => {
      obj[key] = false;
      return obj;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue =
      value.trim() === "" ? "" : isNaN(value) ? value : Number(value);
    setForm((prevForm) => ({
      ...prevForm,
      [name]: newValue,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    handleChange(e);

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    setErrors(validateForm(form)); // SI NO HAY ERRORES EN EL STADO ERRORS...
  };

  const shouldShowErrors = (field) => {
    return touched[field] && errors[field];
  };

  return {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
    shouldShowErrors,
  };
};
