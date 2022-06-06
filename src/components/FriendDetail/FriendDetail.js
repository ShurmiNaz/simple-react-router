import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
     const { userId } = useParams();
     // console.log(friendId)
     const [friend, setFriend] = useState({});
     useEffect(() => {
          const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

          fetch(url)
               .then(res => res.json())
               .then(data => setFriend(data))
     }, [])


     return (
          <div>
               <h3> friend id coming soon {userId}</h3>
               <h1> name : {friend.name}</h1>
               <p> email :  {friend.email}</p>
               <p> Work at : {friend.company?.name}</p>



          </div>
     );
};

export default FriendDetail;