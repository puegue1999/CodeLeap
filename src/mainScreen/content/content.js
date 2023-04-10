import React, { useState }  from 'react';
import axios from 'axios';
import './content.css'

function Content (props) {
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);

    const handleSubmit = async (event) => {
        const jsonCompleto = criarJson();
        const apiUrl = 'https://dev.codeleap.co.uk/careers/';
        try {
            await axios.post(apiUrl, jsonCompleto);
        } catch (error) {
            alert("Algo deu errado");
        }
    }

    function criarJson() {
        const contentJsonspano = '{' +
            '"username": "' + props.user + '",' +
            '"title": "' + title + '",' +
            '"content": "' + content + '"' +
        '}';
        return JSON.parse(contentJsonspano);
    }

    return (
        <form className='box-content' onSubmit={handleSubmit}>
            <span className='content-titulo'>What's in your mind?</span>
            <div className='content-form-input'>
                <span className='content-sub-titulo'>Title</span>
                <input className='content-input' type="span" name="title" placeholder='Hello World' onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='content-form-input'>
                <span className='content-sub-titulo'>Content</span>
                <input className='content-input' type="span" name="content" placeholder='Content here' onChange={(e) => setContent(e.target.value)}/>
            </div>
            <div className='content-form-button'>
                <input className='content-submit' type="submit" value="Enviar" disabled={!title || !content}/>
            </div>
        </ form>
    );
}

export default Content;