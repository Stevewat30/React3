import React from 'react';
import './App.css';
import{ Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
     <h3>Steve's SITE</h3>
     <ul className="nav-links">
       <Link to="/about">         
         <li> About</li>
         </Link>
         <Link>
         <li to="/shop">Shop</li>
         </Link>
     </ul>
    </nav>
  );
}

export default Nav;
