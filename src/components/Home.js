import React from 'react';
import NewsList from './NewsList.js'
import Form from './Form'
import badIntlSources from '../services/badintlsources';
import badSources from '../services/badsources';
import '../App.css';



function Home(props) {
  console.log('this is Home: props', props)
  return (
    <>
      <h1>NewsWindow: How Countries See The News</h1>

      <Form searchInput ={props.searchInput} />
      <div className ='container'>
        <NewsList className = 'us-news-list'
        newsList={props.searchList
          .filter((article, i) => article.country === 'us' && article.id !=='engadget'&& article.id !=='mashable'&& article.id !=='reddit-r-all'&& article.id !=='the-wall-street-journal')} />

        <NewsList className = 'uk-news-list'  newsList={props.searchList.filter((article, i) => article.country === 'gb')} />

        <NewsList className = 'world-news-list'  newsList={props.worldResultList} />
      </div>
    </>
  );
}

export default Home;
