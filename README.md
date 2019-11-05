This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## NEWSWINDOW: How the World VIEWS the News

NewsWindow allows readers to compare how top news is reported across countries. Upon opening the site, the reader gets three windows offering the top news in the US, UK and the English-speaking rest of the world.
Then the user is invited to type a search term, which will return a list of (100?) stories grouped by country of origin.

##LINKS:

-- Repo: https://github.com/mfhan/newswindow  
-- Deployment: https://newswindow.surge.sh


### API info:
-- I used NewsApi.org, which has the properties (language, country) that I was looking for.
Also tried : GNews, contextualwebsearch

**MVP functionality:**  
-- Render an attractive initial page using an external API  
-- Allow user to search the news  
-- Render the API data grouped by country  
-- Use localStorage

**PostMVP functionality:**   
-- Nicer interface  
-- Add default images  
-- Make Netflix-type carousel  
-- Open news items within the app   
-- give user option of choosing specific countries in their search results


### WIREFRAME:
Shows the initial state, then the search response
https://imgur.com/Mboej7K


### Time/Priority Matrix

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Input handling | High | 4hrs| 4hrs | N/A |
| Comparing search result vs source list | High | 2hrs| 2hrs | N/A |
| Configuring API | High | 4hrs| 6hrs | N/A |
| API response tweaking | High | 4hrs| 8hrs | N/A |
| Write Out Components | High | 4hrs| 4hrs | N/A |
| UX and ReadME tweaks| Medium | 2hrs| 4hrs | N/A |
| Total |  | 20hrs| 28hrs | N/A |



### Time Frames (including total time for project)
total time: hopefully around 20 hours
for MVP:   
1. working with NewsAPI's News Source: 2hrs  
2. NewsAPI's Top News functionality: 4hrs  
3. for the SEARCH functionality:  
  -- successfully passing the search input: 4hrs  
  -- comparing response to country and language properties of "sourceList": 2hrs  
  -- returning list of news items in 3 categories: US, UK, Rest of world: 4hrs   
4. Writing out the components themselves: 4hrs
Actual time: 28+hrs

### React Component Hierarchy
https://imgur.com/sHoKD4M

### Components Section
Component	    //  Description
Header: nav links to sections
Main: initiates data pull; routes everything
Home: where initial newslist and search response are rendered
NewsList: handles the rendering of the initial top news cards and the search response
NewsListItem: allows access to individual news item's properties  
Search: where user types input; sends state up
Footer: nav links to sections + trademark

### Additional Libraries
-- Axios  
-- React-Router-Dom


### Code Snippet

The initial sourceList call was successful and will guide me in subsequent API pulls:

```js
makeSourceCall = async () => {
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
    return source
  });
  window.localStorage.setItem('sourceList', JSON.stringify(sourceList))
  this.setState({
    sourceList: sourceList
  });
}
```

The translation portion took a lot of trial and errors, but its integration into the overall app gave me the most satisfaction:

```js
  translateText = async (text) => {
    let queryLink = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190827T203759Z.5526d2e4bd7cba98.4a7c48b1d1c3898045ae0697422b0cb8578be0bd&text='+ text +'&lang=en'
    const response = await axios.post(queryLink)
    return response.data.text[0];
  }
```


### Issues and Resolutions

Brace for a hundred-pager here:  

#### API Limitations:

From the get go, I knew that finding a decent API would be a daunting challenge. Resources that were apparently free and open to the public have vanished or been corralled behind corporate barriers.
I tested resources such as GNews (limited response size; no data on language or country); EventRegister (limited number of queries before being moved to a paid tier).
I settled on NewsAPI despite serious misgivings regarding the relatively small list of sources they offer (134 total) because NewsAPI didn't ask for a fortune up-front and allowed for a reasonable number of daily queries (500).
Alas, it took me a day of testing the news search functionalities to realize that NewsApi's response data was very shallow for the purposes of my app. A large number of sources are pure aggregators and few of the stories came from "legitimate" news providers.

#### API Tweaks:

I was dissatisfied with the response and attempted to create a service folder with files containing all the sources I did NOT want to see in my response. Alas, I quickly found myself battling with a rapidly-expanding list containing usual suspects such as Insider.com', 'Boingboing.net', 'Yahoo.com', 'Huffpost.com', sites that had very little general news such as 'Lifehacker.com' , 'Kinja.com' or 'Aol.com', and worst of all, sites that fed from social media such as 'Youtube.com' and, you guessed it, 'Facebook.com'.

For a couple of days I reluctantly played a game of "News Whack-A-Mole" that I was always losing. No matter how long my list of bad sources grew, there was always a new interloper regurgitating news created by another, more legitimate, outfit.

It took me a number of manipulations to finally realize that my process was upside-down. Instead of trying to control the quality of the results AFTER the API response came back, I came to understand that I had to clearly establish, from the get-go, which news sources I wanted to get my news from. After all, my app project was not about obtaining news items out of a random number of sources, but about carefully comparing the way HIGH-QUALITY, POPULAR news outlets were framing the news depending on their country of origin.

I studied the API documentation and realized that it offered the option of constraining the responses by domain names! It had been sitting all that time, but I had been too preoccupied with end-process quality control.

So I went about creating three different service files containing, in string form, the domains that I wanted the API to limit itself. For instance, for the US, my list included domains such as washingtonpost.com, cnn.com, latimes.com, msnbc.com, foxnews.com, ap.org, nytimes.com, nypost.com etc. For the world file, I tried to inject those domain names that I knew would yield a diverse, yet nationally legitimate output: lemonde.fr, tagesspiegel.de ,zeit.de, elmundo.es, globo.com, lagaceta.com.ar, repubblica.it, lenta.ru, jpost.com, xinhuanet.com, smh.com.au, timesofindia.indiatimes.com, thehindu.com.

Sample code for a query:
```js

  makeWorldCall = async(userInput)=>{
    console.log('this is World Call')
    let queryLink = 'https://newsapi.org/v2/everything?q='
    + userInput
    +'&domains='
    + intlSources
    +'&sortBy=popularity&pageSize=15&apiKey=ded05226f8e9489888443d1b682e93c6'
    const response = await axios.get(queryLink)
  }
```

Were my selections sufficiently wide and inclusive? Alas not. High-quality digital news remains overwhelmingly the domain of wealthier nations where news outlets can seek profit without fear of insolvency or government intervention. But the very fact that these lists are stored in service files means that they are infinitely expandable and modifiable -- the very purpose of a search tool.


#### Styling strategy:


```js
const isButtonClicked = (this.props.isButtonClicked) ? 'news-list' : 'news-list-pre'
```
And later on:

```js
<NewsList addClass={`us-${isButtonClicked}`}
  newsList={this.props.usSearchList} />
```
