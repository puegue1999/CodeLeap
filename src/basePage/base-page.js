import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './base-page.css';
import Login from '../login/login';
import MainScreen from '../mainScreen/main-screen';

function BasePage() {
    return (
    <div className='screen'>
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path=':user/codeleap' element={<MainScreen />} />
            </Routes>
        </Router>
    </div>
    );
}

export default BasePage;