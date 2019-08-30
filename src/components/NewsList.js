import React from 'react';
import '../App.css';

// {'red': props.newsList.length}
const NewsList=(props)=> {

  return (
    <section className= {props.addClass}>
      <div>
      {props.newsList.length ? props.newsList.map((d, i) => {
        return (
          <div className='news-item' >
            <img src={d.icon} alt="flag"/>
            <p>{d.title}</p>
            <p><a href={d.url} target='blank'>Link</a></p>
          </div>
        )
      }) :
      <div className={props.preClass}></div>}
      </div>
    </section>
  );
}

export default NewsList;
