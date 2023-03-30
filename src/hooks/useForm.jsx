import {useState} from 'react'

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue = value.trim() === '' ? '' : isNaN(value) ? value : Number(value);
        setForm((prevForm) => ({
          ...prevForm,
          [name]: newValue,
        }));
      };
   /*
  const handleChange = (e) => {
  const { name, value } = e.target;
  const newValue = e.target.type === 'number' ? parseInt(value) : value;
  setForm((prevForm) => ({
    ...prevForm,
    [name]: newValue,
  }));
};
  */

    const handleBlur = (e) => {
        handleChange(e);

        setErrors(validateForm(form));
    }

    const handleSubmit= (e) => {
        e.preventDefault()  
        setErrors(validateForm(form)); // SI NO HAY ERRORES EN EL STADO ERRORS...

        if (Object.keys(errors).length === 0) {
            alert("enviando formulario")

        }else {
            return
        }
    }

    return {
        form,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleSubmit,
    }
}