import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Footer (props) {

  let ulStyles ={
    'height': '70px',
    'paddingTop': '10px',
    'listStyle': 'none',
    backgroundColor: 'red'
  }


  let aStyles =  {
  display: 'inline',
  color: 'white',
  padding: '5px',
  textAlign: 'center',
  textDecoration: 'none'
  }

  return (
     <ul style={ulStyles}>
       <li style={aStyles}><Link to="/">Home</Link></li>
       <li style={aStyles}><Link to="/about">About This Project</Link></li>
       <p>&copy; 2019 Marie-France Han</p>
     </ul>

  );
}

export default Footer;
