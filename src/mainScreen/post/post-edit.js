import React, { useState }  from 'react';
import axios from 'axios';
import './post-edit.css';
import Error from '../error/error'

function PostEdit (props) {
    const [title, setTitle] = useState(props.post.title);
    const [content, setContent] = useState(props.post.content);

    const handleSubmit = async (event) => {
        const jsonCompleto = criarJson();
        const apiUrl = 'https://dev.codeleap.co.uk/careers/' + props.post.id + '/';
        try {
            await axios.patch(apiUrl, jsonCompleto);
        } catch (error) {
            <Error />
        }
        await event.preventDefault();
    }

    function criarJson() {
        const contentJsonspano = '{' +
            '"title": "' + title + '",' +
            '"content": "' + content + '"' +
        '}';
        return JSON.parse(contentJsonspano);
    }

    return (
        <div>
        {props.showModal &&
            <form className='modal' onSubmit={handleSubmit}>
                <div className='edit-modal'>
                    <span className='edit-titulo'>Edit item</span>
                    <div className='edit-form-input'>
                        <span className='edit-sub-titulo'>Title</span>
                        <input
                            className='edit-input'
                            type="span"
                            name="title"
                            placeholder='Hello World'
                            onChange={(e) => setTitle(e.target.value)}
                            defaultValue={props.post.title}
                        />
                    </div>
                    <div className='edit-form-input'>
                        <span className='edit-sub-titulo'>Content</span>
                        <input
                            className='edit-input'
                            type="span"
                            name="content"
                            placeholder='Content here'
                            onChange={(e) => setContent(e.target.value)}
                            defaultValue={props.post.content}
                        />
                    </div>
                    <div className='edit-form-button'>
                        <input className='edit-cancel' type="button" value="Cancel" onClick={props.eventoFecharModal}/>
                        <input className='edit-save' type="submit" value="Save" disabled={!title || !content}/>
                    </div>
                </div>
            </ form>
        }
        </div>
    );
}

export default PostEdit;