import React from 'react';
import successImage from '../../images/success.svg';
const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={successImage} alt='success' />
    </div>
  );
};

export default FormSuccess;