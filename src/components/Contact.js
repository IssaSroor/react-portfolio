import React from 'react';
import useForm from '../hooks/useContactForm';
import '../styles/style.css';

const Contact = () => {
  const { values, errors, handleChange, validate } = useForm({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Example: send data or redirect to mailto
      window.location.href = `mailto:issasroorofficial@gmail.com?subject=Contact%20Request&body=Name:%20${values.name}%0AEmail:%20${values.email}%0APhone:%20${values.phone}%0AMessage:%20${values.message}`;
    }
  };

  return (
    <div className="parent-four" id="contact">
      <div className="contact-me-title">
        <h2>CONTACT ME</h2>
      </div>
      <form className="contact-me-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="ENTER YOUR NAME*"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <small className="error">{errors.name}</small>}

        <input
          type="email"
          name="email"
          placeholder="ENTER YOUR EMAIL*"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <small className="error">{errors.email}</small>}

        <input
          type="number"
          name="phone"
          placeholder="PHONE NUMBER"
          value={values.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="YOUR MESSAGE*"
          value={values.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <small className="error">{errors.message}</small>}

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
