import React,{ useRef }  from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import emailjs from '@emailjs/browser';

const FormSignup = ({ submitForm }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_srbh6xn', 'template_qmzwost', form.current, 'DUa_MyUCWLzhfBH6c')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);

  const handleFormSubmit = (e) => {
    handleSubmit(e);
    if (Object.keys(errors).length === 0) {
      sendEmail(e);
    }
  };

  return (
    <div className='form-content-right'>
      <form ref={form} onSubmit={handleFormSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Full Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your Name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Phone Number</label>
          <input
            className='form-input'
            type='phone-input'
            name='phonenumber'
            placeholder='Enter your Phone Number'
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && <p>{errors.phonenumber}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>City</label>
          <input
            className='form-input'
            type='text'
            name='city'
            placeholder='Enter your City'
            value={values.city}
            onChange={handleChange}
          />
          {errors.city && <p>{errors.city}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Quantity</label>
          <input
            className='form-input'
            type='text'
            name='quantity'
            placeholder='Enter the Quantity'
            value={values.quantity}
            onChange={handleChange}
          />
        </div>
        <button className='form-input-btn' type='submit' value="Send">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSignup;