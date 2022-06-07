import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './../Friends/friends.css';

const Posts = () => {
     const [posts, setPosts] = useState([]);
     useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/posts')
               .then(res => res.json())
               .then(data => setPosts(data))
     }, [])
     return (
          <div className='friends-container'>
               {
                    posts.map(post => <Post
                         key={post.id}
                         post={post}
                    ></Post>)
               }

          </div>
     );
};

export default Posts;