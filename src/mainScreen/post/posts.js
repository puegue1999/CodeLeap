import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import PostEdit from './post-edit';
import PostDelete from './post-delete';
import moment from 'moment';
import './posts.css'

function Posts (props) {

    const [modalCardEdit, setModalCardEdit] = useState(false);
    const [modalCardDelete, setModalCardDelete] = useState(false);

    const eventoModalEdit = () => {
        setModalCardEdit(!modalCardEdit);
    };

    const eventoModalDelete = () => {
        setModalCardDelete(!modalCardDelete);
    };

    return (
        <div className='post-box'>
            <div className='post-title'>
                <div className='post-right-max'>
                    <span className='post-titulo'>{props.post.title}</span>
                </div>
                <div className='post-left-max'>
                    <button className='post-button' onClick={eventoModalEdit}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button className='post-button' onClick={eventoModalDelete}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            </div>
            <div className='post-user'>
                <span className='post-sub-titulo post-right-max'>@{props.post.username}</span>
                <span className='post-sub-titulo post-left-max'>{moment(props.post.created_datetime, "YYYYMMDD").fromNow()}</span>
            </div>
            <div className='post-content'>
                <span>{props.post.content}</span>
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