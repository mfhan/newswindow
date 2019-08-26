import React from 'react';
import '../App.css';

const NewsList=(props)=> {
  console.log('this is NewsList: props', props)
  return (
    <section>
    {props.newsList.map((d, i) => {
      return (
        <div className='news-item'>
          <h2>{d.title}</h2>
          <a href={d.url} target='blank'>Link</a>
          <p>{d.description}</p>
        </div>
      )
    })}
    </section>
  );
}

export default NewsList;
