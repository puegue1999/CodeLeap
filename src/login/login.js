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
            <span className='login-titulo'>Welcome to CodeLeap network!</span>
            <div className='login-form-input'>
                <span className='login-sub-titulo'>Please enter your name</span>
                <input className='login-input' type="span" name="login" placeholder='John Dow' onChange={(e) => setLogin(e.target.value)}/>
            </div>
            <div className='login-form-button'>
                <input className='login-submit' type="submit" value="Enviar" disabled={!login}/>
            </div>
        </form>
    );
}

export default Login;