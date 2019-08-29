import React from 'react';
import NewsList from './NewsList.js'
import Form from './Form'
import '../App.css';



function Home(props) {
  // console.log('this is Home: props', props)
  return (
    <>
      <h1 className='title'>NewsWindow: How Countries See The News</h1>
        <p className = 'invitation'>Countries around the world see and frame the news differently. Type in a search word and see how the press in the US, the UK and the rest of the world offer differing angles and points of view. </p>

      <Form searchInput ={props.searchInput} />

      <div className ='container'>
        <NewsList addClass='us-news-list'  newsList={props.usSearchList} />

        <NewsList addClass='gb-news-list'  newsList={props.gbSearchList} />

        <NewsList addClass='world-news-list'  newsList={props.worldResultList} />
      </div>
    </>
  );
}

export default Home;
