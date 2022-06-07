import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const PostDetail = () => {
     const { postId } = useParams();
     const [post, setPost] = useState({});
     useEffect(() => {
          fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
               .then(res => res.json())
               .then(data => setPost(data))
     }, [])
     return (
          <div>
               <h3>I am ok {post.title}</h3>
               <p>{post.body}</p>
          </div>
     );
};

export default PostDetail;