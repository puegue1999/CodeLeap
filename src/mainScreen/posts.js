import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import PostEdit from './post-edit';
import moment from 'moment';
import './posts.css'

function Posts (props) {

    const [diferencaTempo, setDiferencaTempo] = useState(null);
    const [modalCard, setModalCard] = useState(false);

    const eventoAbrirModal = () => {
        setModalCard(true);
    };

    const eventoFecharModal = () => {
        setModalCard(false);
    };

    useEffect(() => {
        const tempoAtual = moment();
        const timePassed = moment(tempoAtual.diff(props.post.created_datetime)).format("HH:mm:ss");
        setDiferencaTempo(timePassed);
    }, [props.post, diferencaTempo]);

    return (
        <div className='post-box'>
            <div className='post-title'>
                <div>
                    <text className='login-titulo'>{props.post.title}</text>
                </div>
                <div>
                    <button className='post-button' onClick={eventoAbrirModal}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button className='post-button'>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            </div>
            <div className='post-user'>
                <text className='login-sub-titulo'>@{props.post.username}</text>
                <text className='login-sub-titulo'>{diferencaTempo}</text>
            </div>
            <div className='post-content'>
                <text className='login-sub-titulo'>{props.post.content}</text>
            </div>
            <PostEdit 
                showModal={modalCard}
                eventoFecharModal={eventoFecharModal}
                post={props.post}
            />
            
        </ div>
    );
}

export default Posts;