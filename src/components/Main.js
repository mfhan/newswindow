import React from 'react';
import '../App.css';
import Home from './Home'
import About from './About'
import NewsList from './NewsList'
import Form from './Form'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'

//LATER: import Form from './Form'

class Main extends React.Component {
    state = {
      sourceList: JSON.parse(window.localStorage.getItem('sourceList')) || [],
      newsList:[]
    }

    makeSourceCall = async()=>{
    let queryLink = 'https://newsapi.org/v2/sources?apiKey=ded05226f8e9489888443d1b682e93c6'
    const response = await axios.get(queryLink)
      let sourceList = response.data.sources.map((d,i)=>{
        let source = {
          id: d.id,
          name: d.name,
          url: d.url,
          language: d.language,
          country: d.country
        }
        console.log('source.name', source.name)
        console.log('source.country', source.country)
        return source
      });
      window.localStorage.setItem('sourceList', JSON.stringify(sourceList))

      this.setState({
        sourceList: sourceList
      });
    }

      makeUSNewsCall = async()=>{
        let queryLink = 'https:newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=ded05226f8e9489888443d1b682e93c6'
        const response = await axios.get(queryLink)

          let newsList = response.data.articles.map((d,i)=>{
            let newsItem = {
              title: d.title,
              url:d.url,
              image: d.urlToImage,
              summary: d.description
            }

            return newsItem
            })
              this.setState({
              newsList: newsList
              })
      }



    componentDidMount(){
      if (!this.state.sourceList) {
        this.makeSourceCall();
      }
      this.makeUSNewsCall()
      // other stuff can happen
      //initial window: this.makeInitialCall()

      console.log('componentDidMount')
    }


  render(){
// console.log(this.state.projects)

  return (
    <div>

      <Switch>
        <Route path='/search' component={Form } />
        <Route path='/newslist' render={ (props)=><NewsList newsList = {this.state.newsList} /> } />

        <Route path='/about' component={About} />
        <Route path='/' component={Home} />
      </Switch>
    </div>

  );
}
}

export default Main
