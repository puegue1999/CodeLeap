import React  from 'react';
import './base-page.css';
import Login from '../login/login.js';

function BasePage() {
    return (
        <div className='screen'>
            <Login />
        </div>
    );
}

export default BasePage;