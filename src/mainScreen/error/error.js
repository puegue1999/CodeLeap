import React  from 'react';
import './error.css'

function Error (props) {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
        {props.showModal &&
            <form className='modal' onSubmit={handleSubmit}>
                <div className='error-modal'>
                    <span className='delete-titulo'>You did something wrong?</span>
                </div>
                <div className='error-form-button'>
                    <input className='error-cancel' type="button" value="Back" onClick={props.eventoFecharModal}/>
                </div>
            </ form>
        }
        </div>
    );
}

export default Error;