import React, { useState }  from 'react';
import axios from 'axios';
import './post-edit.css'

function PostEdit (props) {
    const [title, setTitle] = useState(props.post.title);
    const [content, setContent] = useState(props.post.content);

    const handleSubmit = async (event) => {
        // const jsonCompleto = criarJson();
        // const apiUrl = 'https://dev.codeleap.co.uk/careers/';
        // console.log(jsonCompleto);
        // try {
        //     await axios.post(apiUrl, jsonCompleto);
        // } catch (error) {
        //     //previousStep();
        // }
        // event.preventDefault();
    }

    // function criarJson() {
    //     const contentJsonTexto = '{' +
    //         '"username": "' + props.user + '",' +
    //         '"title": "' + title + '",' +
    //         '"content": "' + content + '"' +
    //     '}';
    //     return JSON.parse(contentJsonTexto);
    // }

    return (
        <div>
        {props.showModal &&
            <form className='modal' onSubmit={handleSubmit}>
                <div>
                    <text className='login-titulo'>Edit item</text>
                    <div className='login-form-input'>
                        <text className='login-sub-titulo'>Title</text>
                        <input
                            className='login-input'
                            type="text"
                            name="login"
                            placeholder='Hello World'
                            onChange={(e) => setTitle(e.target.value)}
                            defaultValue={props.post.title}
                        />
                    </div>
                    <div className='login-form-input'>
                        <text className='login-sub-titulo'>Content</text>
                        <input
                            className='login-input'
                            type="text"
                            name="login"
                            placeholder='Content here'
                            onChange={(e) => setContent(e.target.value)}
                            defaultValue={props.post.content}
                        />
                    </div>
                    <div className='login-form-button'>
                        <input className='login-submit' type="button" value="Cancel" onClick={props.eventoFecharModal}/>
                        <input className='login-submit' type="submit" value="Salvar" disabled={!title || !content}/>
                    </div>
                </div>
            </ form>
        }
        </div>
    );
}

export default PostEdit;