import React  from 'react';
import axios from 'axios';
import './post-delete.css'

function PostDelete (props) {

    const handleSubmit = async (event) => {
        const jsonCompleto = criarJson();
        const apiUrl = 'https://dev.codeleap.co.uk/careers/' + props.post.id + '/';
        try {
            await axios.delete(apiUrl, jsonCompleto);
        } catch (error) {
            //previousStep();
        }
        event.preventDefault();
    }

    function criarJson() {
        const contentJsonTexto = '{}';
        return JSON.parse(contentJsonTexto);
    }

    return (
        <div>
        {props.showModal &&
            <form className='modal' onSubmit={handleSubmit}>
                <div className='edit-modal'>
                    <text className='edit-titulo'>Are you sure you want to delete this item?</text>
                    <div className='login-form-button'>
                        <input className='login-submit' type="button" value="Cancel" onClick={props.eventoFecharModal}/>
                        <input className='login-submit' type="submit" value="Delete"/>
                    </div>
                </div>
            </ form>
        }
        </div>
    );
}

export default PostDelete;