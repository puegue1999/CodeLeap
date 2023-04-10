import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Content from './content'
import Posts from './posts'
import './main-screen.css'


function MainScreen () {
    const [posts, setPosts] = useState([]);
    const [url, setUrl] = useState('https://dev.codeleap.co.uk/careers/?limit=10&offset=0');
    const { user } = useParams();

    const getAllPosts = async (url) => {
        const result = await axios.get(url);
        setPosts(result.data.results);
    }

    useEffect(() => {
        if(posts.length <= 0){
            getAllPosts(url);
        }
    }, [url, posts]);

    return (
        <div className='screen-principal'>
            <div className='title-principal'>
                <text>CodeLeap Network</text>
            </div>
            <div className='blocos-principal'>
                <Content user={user} />
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