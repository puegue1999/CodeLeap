import React, { useState }  from 'react';
import axios from 'axios';
import './content.css'

function Content (props) {
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);

    const handleSubmit = async (event) => {
        const jsonCompleto = criarJson();
        const apiUrl = 'https://dev.codeleap.co.uk/careers/';
        console.log(jsonCompleto);
        try {
            await axios.post(apiUrl, jsonCompleto);
        } catch (error) {
            //previousStep();
        }
        event.preventDefault();
    }

    function criarJson() {
        const contentJsonTexto = '{' +
            '"username": "' + props.user + '",' +
            '"title": "' + title + '",' +
            '"content": "' + content + '"' +
        '}';
        return JSON.parse(contentJsonTexto);
    }

    return (
        <form className='box-content' onSubmit={handleSubmit}>
            <text className='login-titulo'>What's in your mind?</text>
            <div className='login-form-input'>
                <text className='login-sub-titulo'>Title</text>
                <input className='login-input' type="text" name="login" placeholder='Hello World' onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='login-form-input'>
                <text className='login-sub-titulo'>Content</text>
                <input className='login-input' type="text" name="login" placeholder='Content here' onChange={(e) => setContent(e.target.value)}/>
            </div>
            <div className='content-form-button'>
                <input className='content-submit' type="submit" value="Enviar" disabled={!title || !content}/>
            </div>
        </ form>
    );
}

export default Content;