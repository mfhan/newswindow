import React from 'react';
import '../App.css';
import Home from './Home'
import About from './About'
import axios from 'axios'
import { Route, Switch, Link } from 'react-router-dom'


class Main extends React.Component {

makeUKNewsCall = async()=>{
  let queryLink = 'https:newsapi.org/v2/top-headlines?' +
      'country=gb&' +
      'apiKey=ded05226f8e9489888443d1b682e93c6'
  const response = await axios.get(queryLink)

    let allUKNews = response.data.articles.map((d,i)=>{
      let newsItemUK = {
        title: d.title,
        author: d.author,
        summary: d.description
      }
      console.log('newsItemUK', newsItemUK)
      return newsItemUK
    })
}


  componentDidMount(){
    this.makeUKNewsCall()
  console.log('componentDidMountUK')
  }

  render(){
// console.log(this.state.projects)
  return (
    <div>

      <Switch>
        <Route path='/about' component={About} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>

  );
}
}

export default Main
