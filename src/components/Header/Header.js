import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
     return (


          <nav className='nav-style'>
               <NavLink className="nav-link" to="/">Home</NavLink>

               <NavLink className="nav-link" to="/friends">friend</NavLink>
               <NavLink className="nav-link" to="/about">about</NavLink>
          </nav>

     );
};

export default Header;