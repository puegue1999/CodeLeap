import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Content from './content/content'
import Posts from './post/posts'
import './main-screen.css'


function MainScreen () {
    const [posts, setPosts] = useState([]);
    const [url] = useState('https://dev.codeleap.co.uk/careers/?limit=10&offset=0');
    const [prevUrl, setPrevUrl] = useState(null);
    const [postUrl, setPostUrl] = useState(null);
    const { user } = useParams();
    const navigate = useNavigate();

    const getAllPosts = async (url) => {
        const result = await axios.get(url);
        setPosts(result.data.results);
        setPrevUrl(result.data.previous);
        setPostUrl(result.data.next);
    }

    const proxPagina = () => {
        getAllPosts(postUrl);
    }

    const prevPagina = () => {
        getAllPosts(prevUrl);
    }

    const  goToLogin = () => {
        navigate('/');
    }

    useEffect(() => {
        if(posts.length <= 0){
            getAllPosts(url);
        }
    }, [url, posts, prevUrl, postUrl]);

    return (
        <div className='screen-principal'>
            <div className='title-principal'>
                <span>CodeLeap Network</span>
                <button className='loggout' onClick={goToLogin}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            </div>
            <div className='blocos-principal'>
                <Content user={user} />
            </div>
            <div className='blocos-botoes'>
                <button className='blocos-arrow' onClick={prevPagina} disabled={!prevUrl}>
                    <FontAwesomeIcon icon={faCircleLeft} />
                </button>
                <button className='blocos-arrow' onClick={proxPagina} disabled={!postUrl}>
                    <FontAwesomeIcon icon={faCircleRight} />
                </button>
            </div>
            <div className='blocos-principal'>
                {
                    posts.sort((idA, idB) =>
                        idB.id - idA.id
                    ).map((post, index) =>
                        <Posts
                            post={post}
                            user={user}
                            key={index}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default MainScreen;