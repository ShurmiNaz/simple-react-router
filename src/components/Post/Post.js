import React from 'react';
import { Link } from 'react-router-dom';
import './../Friend/friend.css';

const Post = (props) => {
     const { id, title } = props.post;
     return (
          <div className='friends-style'>
               <h3> {id}- {title} </h3>
               <Link className='button-style' to={`/post/${id}`}> See more</Link> <br /><br />

          </div>
     );
};

export default Post;