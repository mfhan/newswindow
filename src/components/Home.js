import React from 'react';
import NewsList from './NewsList.js'
import Form from './Form'
import '../App.css';

function Home(props) {
  console.log('this is Home: props', props)
  return (
    <div className ='container'>

      <h1>NewsWindow: How Countries See The News</h1>
      <br />
      <Form searchInput ={props.searchInput} />
      <NewsList newsList={props.searchList.filter((article) => article.country === 'us')} />
      <NewsList newsList={props.searchList.filter((article) => article.country === 'gb')} />
      <NewsList newsList={props.searchList.filter((article) => article.language === 'en' &&  article.country !=='us' && article.country !=='gb' )} />
      <NewsList newsList={props.newsList} />
    </div>
  );
}

export default Home;
