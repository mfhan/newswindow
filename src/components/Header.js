import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Header (props) {

  return (
     <header class="topnav" id="myTopnav">
       <li ><Link to="/">Home</Link></li>
       <li ><Link to="/about">About This Project</Link></li>
       <li ><Link to="/about">How to Contribute</Link></li>
     </header>

  );
}

export default Header;
