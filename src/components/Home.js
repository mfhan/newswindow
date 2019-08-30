import React from 'react';
import NewsList from './NewsList.js'
import Form from './Form'
import '../App.css';

class Home extends React.Component {
  constructor(props){
  super(props)
  // this.state = {
  //   value: ''
  // }
}

  // handleChange = (e) => {
  //   console.log("this is handleChange", e.target.value)
  //   this.setState({
  //     value: e.target.value
  //   })
  // }

  render(){
  return (
    <>
    <div className= 'intro'>
      <h1 className='title'>NEWSWINDOW <br />How Countries See The News</h1>
        <div className = 'invitation'><span>Countries around the world see and frame the news differently. <br />Type in a search word to how angles and points of view vary. </span></div>

      <Form
      searchInput ={this.props.searchInput}  />

      </div>

      <div className ='container'>
        <NewsList addClass='us-news-list' preClass='us-news-list-pre' newsList={this.props.usSearchList} />

        <NewsList addClass='gb-news-list' preClass='gb-news-list-pre'  newsList={this.props.gbSearchList} />

        <NewsList addClass='world-news-list' preClass='world-news-list-pre' newsList={this.props.worldResultList} />
      </div>

    </>
  );
  }
}

export default Home;
