import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import mailImage from '../../images/form.svg';
import { Icon } from '../Signin/SigninElements';



const BookaDemo = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <Icon id='signin-heading' to="/"> 
    RgenAI
    </Icon>
      <div className='form-container'>
        <Icon to="/" className='close-btn'>x</Icon>
        <div className='form-content-left'>
        <img className='form-img' src={mailImage} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default BookaDemo;