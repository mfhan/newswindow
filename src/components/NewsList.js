import React from 'react';


const NewsList=(props)=> {
  console.log('this is NewsList: props', props)
  return (
    <>
    {props.newsList.map((d, i) => {
      return (
        <div>
          <h2>{d.title}</h2>
          <a href={d.url} target='blank'>Link</a>
          <p>{d.description}</p>
        </div>
      )
    })}
    </>
  );
}

export default NewsList;
