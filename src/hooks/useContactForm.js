import { useState } from 'react';

const useContactForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: '' }); // Clear error on change
    };
  
    const validate = () => {
      const newErrors = {};
      if (!values.name) {
        newErrors.name = 'Name is required';
      } else if (!/^[A-Za-z\s]+$/.test(values.name)) {
        newErrors.name = 'Name must contain only letters and spaces';
      }
  
      if (!values.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        newErrors.email = 'Email is invalid';
      }
  
      if (!values.message) {
        newErrors.message = 'Message is required';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    return { values, errors, handleChange, validate };
  };
export default useContactForm;
