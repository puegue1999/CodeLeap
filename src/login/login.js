import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css'

function Login() {
    const [login, setLogin] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/' + login + '/codeleap');
    }

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <text className='login-titulo'>Welcome to CodeLeap network!</text>
            <div className='login-form-input'>
                <text className='login-sub-titulo'>Please enter your name</text>
                <input className='login-input' type="text" name="login" placeholder='John Dow' onChange={(e) => setLogin(e.target.value)}/>
            </div>
            <div className='login-form-button'>
                <input className='login-submit' type="submit" value="Enviar" disabled={!login}/>
            </div>
        </form>
    );
}

export default Login;