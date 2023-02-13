import React, { useState,useEffect } from "react";
import './Login.css';
import { useHistory } from 'react-router-dom';
import logo from './assets/logo.png';
import LoginSMsg from "./LoginMsg";
import Error from "./Error";
import SignUp from "./SignUp";
export const LoginForm = () => {
    const [email, setEmail] = useState('example@gmail.com');
    const [pass, setPass] = useState('');


    const [name,setName] = useState('Hello')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, pass);
    }


    useEffect(() => {
    console.log(email, "EMAIL")
    }, [email])

    return (
        <div className="auth-form-container">
            <div className="logo">
            <img src={logo}  alt="logo" id="logo"/>
            </div>
            <h2>Hello Again?</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email}  onChange={(e) => {
                    
                    setEmail(e.target.value)}} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            {/* <LoginSMsg onLogin={handleSubmit} /> */}
            <button className="link-btn" onClick={'SignUp'}>Don't have account | Sign Up</button>
            <LoginSMsg onLogin={handleSubmit}/>

            <h1>{email}</h1>
            
        </div>
    )
}
export default LoginForm;