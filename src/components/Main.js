import React from 'react';
import '../App.css';
import Home from './Home'
import About from './About'
import badIntlSources from '../services/badintlsources';
import badSources from '../services/badsources';
import NewsList from './NewsList'
import Form from './Form'
import axios from 'axios'
import {Translate} from '@google-cloud/translate';
import { Route, Switch } from 'react-router-dom'


class Main extends React.Component {
  state = {
    sourceList: JSON.parse(window.localStorage.getItem('sourceList')) || [],
    newsList:[],
    searchList:[],
    worldResultList:[],
    userInput:''
  }


  makeSourceCall = async()=>{
    let queryLink = 'https://newsapi.org/v2/sources?apiKey=ded05226f8e9489888443d1b682e93c6'
    const response = await axios.get(queryLink)
    let sourceList = response.data.sources
      .filter(element => !badSources.includes(element.name))
      .map((d,i)=>{
        let sourceItem = {
          id: d.id,
          name: d.name,
          url: d.url,
          language: d.language,
          country: d.country
        }
        console.log('sourceItem.name', sourceItem.name)
        console.log('sourceList', sourceList)
        return sourceItem
      });
      window.localStorage.setItem('sourceList', JSON.stringify(sourceList))

      this.setState({
        sourceList: sourceList
      });
  }



    makeSearchCall = async(userInput)=>{
      console.log('this is searchCall')
      let queryLink = 'https://newsapi.org/v2/everything?q='
      + userInput
      +'&from=2019-08-26&to=2019-08-27&sortBy=popularity&pageSize=100&apiKey=ded05226f8e9489888443d1b682e93c6'

      const response = await axios.get(queryLink)
      let sourceArray = this.state.sourceList;
      console.log('this is response', response)
      let searchList = response.data.articles
        .filter(element => !badIntlSources.includes(element.name))
        .map((d,i) => {
          let searchItem = {
            title: d.title,
            url:d.url,
            image: d.urlToImage,
            summary: d.description,
            id: d.source.id,
            name: d.source.name
          }
        sourceArray.forEach((newsOrg) => {
          if (searchItem.name === 'Reuters' || searchItem.id === 'reuters') {
            searchItem.country = 'gb'
          }
          else if (searchItem.name === newsOrg.name || searchItem.id === newsOrg.id) {
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

    translateText = async(text)=>{
      let queryLink = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190827T203759Z.5526d2e4bd7cba98.4a7c48b1d1c3898045ae0697422b0cb8578be0bd&text='+ text +'&lang=en'
      const response = await axios.post(queryLink)
      .then((res) => {
        console.log('res.data',res.data)
        return res.data
      })
      console.log(response)
      // console.log('response',response)
      // const translatedText = response.data.text
      // console.log('translatedText', translatedText)
      // return translatedText
    }

    makeWorldList=()=>{
      let worldResultList = this.state.searchList
      .filter((article) => article.country !=='us' && article.country !=='gb' && article.country !=='ca' && !badIntlSources.includes(article.name))
      .map((d,i) => {
        let finalTitle = this.translateText(d.title)
        console.log(finalTitle.text.length)
        // console.log(typeof d.title)
        // console.log('typeof this.translateText', this.translateText(d.title) && this.translateText(d.title))
         let worldListItem = {
           title: d.finalTitle,
           summary:d.description
        }

        return worldListItem
      });
        this.setState({
          worldResultList: worldResultList
        })
    }

      handleClick = async (e, userInput) =>{
        e.preventDefault()
        console.log("Search term submitted", userInput)
        // this.setState({
        //   userInput: userInput
        // })
        await this.makeSearchCall(userInput);
        await this.makeWorldList();

      }


  componentDidMount(){
    console.log('sourcelist',this.state.sourceList)
    if (this.state.sourceList.length === 0) {
      this.makeSourceCall();
    }
    console.log('componentDidMount')
    if (this.state.searchList.length !== 0){

    }
  }




  render(){
// // console.log(this.state.projects)
// <Route path='/search' component={Form } />
// <Form  onClick={this.handleClick} />
// console.log(process.env.REACT_APP_TRANSLATE_ID)
  return (
    <main>
      <Switch>
      <Route exact path='/' render={(props)=><Home
        searchInput={this.handleClick}
        searchList ={this.state.searchList}
        newsList={this.state.newsList}
        worldResultList = {this.state.worldResultList}/> }
      />

        <Route path='/about' component={About} />

      </Switch>
    </main>

  );
  }
  }

  export default Main
