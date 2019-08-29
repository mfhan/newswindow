import React from 'react';
import '../App.css';

const NewsList=(props)=> {
  console.log('this is NewsList: props', props)
  let limit = props.newsList.slice(0,10)
  return (
    <section>
    {props.newsList.length ? limit.map((d, i) => {
      return (
        <div className='news-item'>
          <h3>{d.title}</h3>
          <a href={d.url} target='blank'>Link</a>
          <p>{d.description}</p>
        </div>
      )
    }) : <h1>No news yet.... <br />Start a Search!</h1>}
    </section>
  );
}

export default NewsList;
