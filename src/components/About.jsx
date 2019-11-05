import React from 'react';


function About(props) {
  console.log('this is About: props', props)
  return (<
    div >
    <h2 > About This Project: < /h2>
    <p > Visit my < a href="https://medium.com/p/53f4e3debfa7/"
        target="_blank" > Medium Blog Link < /a> for a full recount of my app-building adventure!  </p>

    </div>
      );
    }
    
export default About;