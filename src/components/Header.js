import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Header (props) {

  let ulStyles ={
    'height': '80px',
    'paddingTop': '50px',
    'listStyle': 'none',
    backgroundColor: 'yellow'
  }


  let aStyles =  {
  display: 'inline',
  color: 'white',
  textAlign: 'center',
  padding: '14px',
  textDecoration: 'none'
  }

  return (
     <ul style={ulStyles}>
       <li style={aStyles}><Link to="/">Home</Link></li>
       <li style={aStyles}><Link to="/search">Search and Compare the News</Link></li>
        <li style={aStyles}><Link to="/newslist">News Window</Link></li>
       <li style={aStyles}><Link to="/about">About This Project</Link></li>
     </ul>

  );
}

export default Header;
