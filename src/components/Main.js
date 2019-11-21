import React from 'react';
import '../App.css';
import Home from './Home'
import About from './About'
import badIntlSources from '../services/badintlsources';
import badSources from '../services/badsources';
import usSources from '../services/ussources';
import gbSources from '../services/gbsources';
import intlSources from '../services/intlsources';
import axios from 'axios'
import {
  Route,
  Switch
} from 'react-router-dom'


class Main extends React.Component {
    state = {
      sourceList: JSON.parse(window.localStorage.getItem('sourceList')) || [],
      newsList: [],
      searchList: [],
      usSearchList: [],
      gbSearchList: [],
      worldSearchList: [],
      worldResultList: [],
      userInput: '',
      value: '',
      buttonClicked: false
    }

    makeSourceCall = async () => {
      let queryLink = 'https://newsapi.org/v2/sources?apiKey=ded05226f8e9489888443d1b682e93c6'
      const response = await axios.get(queryLink)
      let sourceList = response.data.sources
        .filter(element => !badSources.includes(element.name))
        .map((d, i) => {
          let sourceItem = {
            id: d.id,
            name: d.name,
            url: d.url,
            language: d.language,
            country: d.country
          }
          return sourceItem
        });
      window.localStorage.setItem('sourceList', JSON.stringify(sourceList))
      this.setState({
        sourceList: sourceList
      });
    }


    makeUSCall = async (userInput) => {
      try {
        console.log('this is USCall')
        let queryLink = 'https://newsapi.org/v2/everything?q=' +
          userInput +
          '&domains=' +
          usSources +
          '&sortBy=popularity&pageSize=10&apiKey=ded05226f8e9489888443d1b682e93c6'
        const response = await axios.get(queryLink)
        console.log('this is US response', response)
        let usSearchList = response.data.articles
          .filter(element => !badIntlSources.includes(element.name))
          .map((d, i) => {
            let searchItem = {
              title: d.title,
              url: d.url,
              image: d.urlToImage,
              summary: d.description,
              id: d.source.id,
              name: d.source.name,
              icon: 'http://www.geonames.org/flags/x/us.gif'
            }
            console.log(searchItem.name);
            return searchItem;

          })
        this.setState({
          usSearchList: usSearchList
        })
      } catch (error) {
        console.log(error.message);
      }
    }


    makeGBCall = async (userInput) => {
      console.log('this is GB Call')
      let queryLink = 'https://newsapi.org/v2/everything?q='+
        userInput +
        '&domains=' +
        gbSources +
        '&sortBy=popularity&pageSize=10&apiKey=ded05226f8e9489888443d1b682e93c6'
      const response = await axios.get(queryLink)
      console.log('this is GB response', response)
      let gbSearchList = response.data.articles
        .filter(element => !badIntlSources.includes(element.name))
        .map((d, i) => {
          let searchItem = {
            title: d.title,
            url: d.url,
            image: d.urlToImage,
            summary: d.description,
            id: d.source.id,
            name: d.source.name,
            icon: 'https://i.imgur.com/56urXdl.png'
          }
          console.log(searchItem.name);
          return searchItem;
        })
      this.setState({
        gbSearchList: gbSearchList
      })
    }


    translateText = async (text) => {
      let queryLink = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190827T203759Z.5526d2e4bd7cba98.4a7c48b1d1c3898045ae0697422b0cb8578be0bd&text=' + text + '&lang=en'
      const response = await axios.post(queryLink)
      return response.data.text[0];
    }


    makeWorldCall = async (userInput) => {
      console.log('this is World Call')
      let queryLink = 'https://newsapi.org/v2/everything?q=' +
        userInput +
        '&domains=' +
        intlSources +
        '&sortBy=popularity&pageSize=10&apiKey=ded05226f8e9489888443d1b682e93c6'
      const response = await axios.get(queryLink)
      console.log('this is World response', response)
      let worldSearchList = response.data.articles
        .filter(element => !badIntlSources.includes(element.name))
        .map((d, i) => {
          let searchItem = {
            title: d.title,
            url: d.url,
            image: d.urlToImage,
            summary: d.description,
            id: d.source.id,
            name: d.source.name
          }
          console.log(searchItem.name);
          return searchItem;
        })
      this.setState({
        worldSearchList: worldSearchList
      })
    }


    makeWorldList = async () => {
      let worldResultList = await this.state.worldSearchList
        .map(async (d, i) => {
          let finalTitle = await this.translateText(d.title);
          let worldListItem = {
            title: finalTitle,
            url: d.url,
            summary: d.description,
            name: d.name,
            icon: 'https://i.imgur.com/l2HFjvA.png'
          }
          return worldListItem
        });
      worldResultList = await Promise.all(worldResultList);
      console.log(worldResultList);
      this.setState({
        worldResultList: worldResultList
      })
    }


    handleChange = (e) => {
      console.log("this is handleChange", e.target.value)
      this.setState({
        value: e.target.value
      })
    }


    handleClick = async (e, userInput) => {
      e.preventDefault()
      console.log("Search term submitted", userInput);
      this.setState({
        buttonClicked: true
      })
      await this.makeWorldCall(userInput);
      await this.makeUSCall(userInput);
      await this.makeGBCall(userInput);
      await this.makeWorldList();
    }


    componentDidMount() {
      console.log('sourcelist', this.state.sourceList)
      if (this.state.sourceList.length === 0) {
        this.makeSourceCall();
      }
      console.log('componentDidMount')
    }

    render() {
      return ( <
        main >
        <
        Switch >
        <
        Route exact path = '/'
        render = {
          (props) => < Home
          keyChange = {
            this.handleChange
          }
          searchInput = {
            this.handleClick
          }
          value = {
            this.state.value
          }
          isButtonClicked = {
            this.state.buttonClicked
          }
          usSearchList = {
            this.state.usSearchList
          }
          gbSearchList = {
            this.state.gbSearchList
          }
          worldResultList = {
            this.state.worldResultList
          }
          /> } / >
          <
          Route path = '/about'
          component = {
            About
          }
          /> < /
          Switch > <
          /main>
        );
      }
    }
    export default Main
