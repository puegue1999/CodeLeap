import React  from 'react';
import axios from 'axios';
import './post-delete.css';
import Error from '../error/error';

function PostDelete (props) {

    const handleSubmit = async (event) => {
        const jsonCompleto = criarJson();
        const apiUrl = 'https://dev.codeleap.co.uk/careers/' + props.post.id + '/';
        try {
            await axios.delete(apiUrl, jsonCompleto);
        } catch (error) {
            <Error />
        }
        window.location.reload(true);
        event.preventDefault();
    }

    function criarJson() {
        const contentJsonspano = '{}';
        return JSON.parse(contentJsonspano);
    }

    return (
        <div>
        {props.showModal &&
            <form className='modal' onSubmit={handleSubmit}>
                <div className='delete-modal'>
                    <span className='delete-titulo'>Are you sure you want to delete this item?</span>
                    <div className='delete-form-button'>
                        <input className='button-cancel' type="button" value="Cancel" onClick={props.eventoFecharModal}/>
                        <input className='button-delete' type="submit" value="Delete"/>
                    </div>
                </div>
            </ form>
        }
        </div>
    );
}

export default PostDelete;