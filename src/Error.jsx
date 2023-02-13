import React from 'react'
import { useState } from 'react';
import LoginInfo from './LoginInfo';
import LoginSMsg from './LoginMsg';


const Error = () => {

const [ setErrorMessages, setIsSubmitted] = useState('');



const handleSubmit = (event) => {

    event.preventDefault();
  
    const { email, password } = document.forms[0];
  
  
    const userData = LoginInfo.find((user) => user.email=== email.value);
  
  
    if (userData) {
      if (userData.password !== password.value) {

        setErrorMessages({ name: "password", message: Error.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      
      setErrorMessages({ name: "email", message: Error.email });
    }
  

  return(
    <div className="button__submit">
        <LoginSMsg onLogin={handleSubmit}/>
    </div>
  )
};
}

export default Error;
