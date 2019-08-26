import React from 'react';
import '../App.css';
import Home from './Home'
import About from './About'
import NewsList from './NewsList'
import Form from './Form'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'


class Main extends React.Component {
    state = {
      sourceList: JSON.parse(window.localStorage.getItem('sourceList')) || [],
      newsList:[],
      searchList: [],
      usSearchList: [],
      userInput:''
    }


    makeSourceCall = async()=>{
      let queryLink = 'https://newsapi.org/v2/sources?apiKey=ded05226f8e9489888443d1b682e93c6'
      const response = await axios.get(queryLink)
      let sourceList = response.data.sources.map((d,i)=>{
          let sourceItem = {
            id: d.id,
            name: d.name,
            url: d.url,
            language: d.language,
            country: d.country
          }
          console.log('sourceItem.name', sourceItem.name)
          return sourceItem
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
            console.log('newsItem.name', newsItem.name)
            return newsItem
            })
              this.setState({
              newsList: newsList
              })
      }


      makeSearchCall = async(userInput)=>{
        console.log('this is searchCall')
        let queryLink = 'https://newsapi.org/v2/everything?q='
        + userInput
        +'&sortBy=popularity&pageSize=100&apiKey=ded05226f8e9489888443d1b682e93c6'

        const response = await axios.get(queryLink)
        let sourceArray = this.state.sourceList;
        console.log('this is response', response)
        let searchList = response.data.articles.map((d,i) => {
          let searchItem = {
            title: d.title,
            url:d.url,
            image: d.urlToImage,
            summary: d.description,
            id: d.source.id,
            name: d.source.name
          }
          sourceArray.forEach((newsOrg) => {
            if (searchItem.name === newsOrg.name) {
              searchItem.country = newsOrg.country
              searchItem.language = newsOrg.language
            }
          })
          console.log(searchItem.name);
          return searchItem;
              // for (let i =0; i<searchList.length; i++ ){
              //   for (let j=0; j< sourceArray.length; j++){
              //     if (searchList[i].name === sourceArray[j].name && sourceArray[j].country === "us"){
              //       usSearchList.push(searchList)
              //     }
              //   }
              // }
              // console.log(usSearchList)
              // return usSearchList
        })

              this.setState({
                searchList: searchList
            })
      }


        handleClick = (e, userInput) =>{
          e.preventDefault()
          console.log("Search term submitted", userInput)
          // this.setState({
          //   userInput: userInput
          // })
          this.makeSearchCall(userInput)
        }


    componentDidMount(){
      console.log(this.state.sourceList)
      if (this.state.sourceList.length === 0) {
        this.makeSourceCall();
      }

      console.log('componentDidMount')
    }




  render(){
// // console.log(this.state.projects)
// <Route path='/search' component={Form } />
// <Form  onClick={this.handleClick} />
  return (
    <main>


      <Switch>
      <Route exact path='/' render={(props)=><Home
        searchInput={this.handleClick}
        searchList ={this.state.searchList}
        newsList={this.state.newsList}/> }  />

        <Route path='/about' component={About} />

      </Switch>
    </main>

  );
  }
  }

  export default Main
