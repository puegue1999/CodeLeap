import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import PostEdit from './post-edit';
import PostDelete from './post-delete';
import moment from 'moment';
import './posts.css'

function Posts (props) {

    const [diferencaTempo, setDiferencaTempo] = useState(null);
    const [modalCardEdit, setModalCardEdit] = useState(false);
    const [modalCardDelete, setModalCardDelete] = useState(false);

    const eventoModalEdit = () => {
        setModalCardEdit(!modalCardEdit);
    };

    const eventoModalDelete = () => {
        setModalCardDelete(!modalCardDelete);
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
                    <button className='post-button' onClick={eventoModalEdit}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button className='post-button' onClick={eventoModalDelete}>
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
                showModal={modalCardEdit}
                eventoFecharModal={eventoModalEdit}
                post={props.post}
            />

            <PostDelete
                showModal={modalCardDelete}
                eventoFecharModal={eventoModalDelete}
                post={props.post}
            />
            
        </ div>
    );
}

export default Posts;