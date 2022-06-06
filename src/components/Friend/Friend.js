import React from 'react';
import { Link } from 'react-router-dom';
import './friend.css';

const Friend = (props) => {

     const { id, name, email, username, phone } = props.friend;
     return (
          <div className='friend-style'>
               <h1>Name : {name} ID-{id}</h1>
               <h3>UserName : {username}</h3>
               <p> Email : {email}</p>
               <h4>Phone : {phone}</h4>
               <Link className='button-style' to={`/friend/${id}`}>Friend Detail</Link>
               <br /><br />
          </div >
     );
};

export default Friend;