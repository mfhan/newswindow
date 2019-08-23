import React from 'react';


function Home(props) {
  console.log('this is Home: props', props)
  return (
    <React.Fragment>
    <h1>NewsWindow</h1>
    <h2>How Countries View The News</h2>
    </React.Fragment>
  );
}

export default Home;
