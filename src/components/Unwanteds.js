
  makeAllNewsCall = async()=>{
    let queryLink = 'https://newsapi.org/v2/everything?q=Macron&apiKey=ded05226f8e9489888443d1b682e93c6'
    const response = await axios.get(queryLink)

      let newsList = response.data.articles.map((d,i)=>{
        let newsItem = {
          title: d.title,
          author: d.author,
          summary: d.description
        }
        console.log('newsItem', newsItem)
        return newsItem
        })
          this.setState({
          newsList: newsList
          })
  }



  import React from 'react'

  class Form extends React.Component {
    constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }

    handleClick = (e) =>{
      e.preventDefault()
      console.log("Serach submitted", e)
      //we need to lift state to the CSA component
      //below line delivers the info to the parent app
      this.props.onClick(this.state.value)
      this.setState({value: ''})
    }

    handleChange = (e) => {
      console.log("this is handleChange", e.target.value)
      this.setState({
        value: e.target.value
      })
    }

   render(){
     return(
       <form action="">
          <input
          type = 'text'
          placeholder = 'Search the news!'
          onChange = {this.handleChange}
          value = {this.state.value}
          />
           <button
           onClick={this.handleClick}
           >Submit</button>
        </form>
     )
   }
   }

  export default Form



  this.makeUSNewsCall();
  this.makeUKNewsCall();

  
    makeUSNewsCall = async()=>{
      let queryLink = 'https:newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=ded05226f8e9489888443d1b682e93c6'
      const response = await axios.get(queryLink)

        let USNewsList = response.data.articles.map((d,i)=>{
          let USNewsItem = {
            title: d.title,
            image: d.urlToImage,
            summary: d.description
          }
          console.log('USNewsItem', USNewsItem)
          return USNewsItem
          })
            this.setState({
            USNewsList: USNewsList
            })
    }



    makeUKNewsCall = async()=>{
      let queryLink = 'https:newsapi.org/v2/top-headlines?' +
          'country=gb&' +
          'apiKey=ded05226f8e9489888443d1b682e93c6'
      const response = await axios.get(queryLink)

        let UKNewsList = response.data.articles.map((d,i)=>{
          let UKNewsItem = {
            title: d.title,
            image: d.urlToImage,
            summary: d.description
          }
          console.log('UKNewsItem', UKNewsItem)
          return UKNewsItem
          })
            this.setState({
            UKNewsList: UKNewsList
            })
    }
