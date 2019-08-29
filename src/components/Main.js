import React from 'react';
import '../App.css';
import Home from './Home'
import About from './About'
import badIntlSources from '../services/badintlsources';
import badSources from '../services/badsources';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'


class Main extends React.Component {
  state = {
    sourceList: JSON.parse(window.localStorage.getItem('sourceList')) || [],
    newsList:[],
    searchList:[],
    usSearchList:[],
    gbSearchList:[],
    wdSearchList:[],
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
    +'&sortBy=popularity&pageSize=100&apiKey=ded05226f8e9489888443d1b682e93c6'

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
        }
      })
      console.log(searchItem.name);
      return searchItem;
    })
      this.setState({
        searchList: searchList
      })
  }


    makeUSCall = async(userInput)=>{
      console.log('this is USCall')
      let queryLink = 'https://newsapi.org/v2/everything?q='
      + userInput
      +'&domains=washingtonpost.com,cnn.com,latimes.com, foxnews.com,ap.org,nytimes.com&sortBy=popularity&pageSize=20&apiKey=ded05226f8e9489888443d1b682e93c6'

      const response = await axios.get(queryLink)
      let sourceArray = this.state.sourceList;
      console.log('this is US response', response)
      let usSearchList = response.data.articles
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
        console.log(searchItem.name);
        return searchItem;
      })
        this.setState({
          usSearchList: usSearchList
        })
    }


    makeGBCall = async(userInput)=>{
      console.log('this is USCall')
      let queryLink = 'https://newsapi.org/v2/everything?q='
      + userInput
      +'&domains=bbc.co.uk,guardian.com,dailymail.co.uk,independent.co.uk,telegraph.co.uk,mirror.co.uk,metro.co.uk&sortBy=popularity&pageSize=20&apiKey=ded05226f8e9489888443d1b682e93c6'

      const response = await axios.get(queryLink)
      let sourceArray = this.state.sourceList;
      console.log('this is GB response', response)
      let gbSearchList = response.data.articles
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
        console.log(searchItem.name);
        return searchItem;
      })
        this.setState({
          gbSearchList: gbSearchList
        })
    }




  translateText = async (text) => {
    let queryLink = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190827T203759Z.5526d2e4bd7cba98.4a7c48b1d1c3898045ae0697422b0cb8578be0bd&text='+ text +'&lang=en'
    const response = await axios.post(queryLink)
    return response.data.text[0];
  }


      makeWorldCall = async(userInput)=>{
        console.log('this is World Call')
        let queryLink = 'https://newsapi.org/v2/everything?q='
        + userInput
        +'&domains=lemonde.fr,tagesspiegel.de,zeit.de,elmundo.es,globo.com,handelsblatt.com,lagaceta.com.ar,repubblica.it,lenta.ru,lesechos.fr,liberation.fr,news24.com,rbc.ru,rtlnieuws.nl,spiegel.de,svd.se,thehindu.com,jpost.com,wiwo.de,xinhuanet.com&sortBy=popularity&pageSize=20&apiKey=ded05226f8e9489888443d1b682e93c6'
        const response = await axios.get(queryLink)
        let sourceArray = this.state.sourceList;
        console.log('this is World response', response)
        let wdSearchList = response.data.articles
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
          console.log(searchItem.name);
          return searchItem;
        })
          this.setState({
            wdSearchList: wdSearchList
          })
      }


  makeWorldList= async ()=>{
    let worldResultList = await this.state.searchList
      .filter((article) => article.country !=='us' && article.country !=='gb' && article.country !=='ca' && !badIntlSources.includes(article.name))
      .map(async (d,i) => {
        let finalTitle = await this.translateText(d.title);
        let worldListItem = {
         title: finalTitle,
         url:d.url,
         summary:d.description,
         name:d.name
       }
      return worldListItem
    });
      worldResultList = await Promise.all(worldResultList);
      this.setState({
        worldResultList: worldResultList
      })
  }


    handleClick = async (e, userInput) =>{
      e.preventDefault()
      console.log("Search term submitted", userInput)
      await this.makeSearchCall(userInput);
      this.makeWorldList();
    }


  componentDidMount(){
    console.log('sourcelist',this.state.sourceList)
    if (this.state.sourceList.length === 0) {
      this.makeSourceCall();
    }
    console.log('componentDidMount')
  }

  render(){
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
