This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## NEWSWINDOW: How the World VIEWS the News

NewsWindow allows readers to compare how top news is reported across countries.
The user is invited to type a search term, which will make three separate API calls to NewsAPI and return three windows offering the top results in the US, UK and the rest of the world.
THE TWIST: the "Rest-of-the-world" headlines are all from non-English speaking news sources, meaning they go through a separate API call that AUTOMATICALLY TRANSLATES the headlines.


##LINKS:

-- Repo: https://github.com/mfhan/newswindow  
-- Deployment: http://newsindow.surge.sh
-- Medium post: https://medium.com/p/53f4e3debfa7/


### API info:
-- I used NewsApi.org, which has the properties (language, country) that I was looking for.
Also tried : GNews, contextualwebsearch

-- After much tribulations dealing with expensive services, I settled on Yandex Translate.


**MVP functionality:**  

-- Allow user to input a search term  
-- Render the API data in three separate containers
-- For the non-English results, there is an automatic call to a translation API.
-- Each news item is styled with a small logo
-- The three news containers are styled so that their background color automatically fades when they are filled with news items.


### Time/Priority Matrix

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Input handling | High | 4hrs| N/A | N/A |
| Comparing search result vs source list | High | 2hrs| N/A | N/A |
| Configuring API | High | 4hrs| N/A | N/A |
| API response tweaking | High | 4hrs| N/A | N/A |
| Write Out Components | High | 4hrs| N/A | N/A |
| UX and ReadME tweaks| Medium | 2hrs| N/A | N/A |
| Total |  | 20hrs| N/A | N/A |



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
5. Yandex Translate: 8hrs  


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

After a call to obtain non-English language news, the response is sent to another API via the translateText function.

```js

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

```

### Issues and Resolutions


#### News API Limitations:

From the get go, I knew that finding a decent API would be a daunting challenge. Resources that were apparently free and open to the public have vanished or been corralled behind corporate barriers.
I tested resources such as GNews (limited response size; no data on language or country); EventRegister (limited number of queries before being moved to a paid tier).
I settled on NewsAPI despite serious misgivings regarding the relatively small list of sources they offer (134 total) because NewsAPI didn't ask for a fortune up-front and allowed for a reasonable number of daily queries (500).
Alas, it took me a day of testing the news search functionalities to realize that NewsApi's response data was very shallow for the purposes of my app. A large number of sources are pure aggregators and few of the stories came from "legitimate" news providers.
I studied the API documentation and realized that it offered the option of constraining the responses by domain names! So I created three different service files containing, in string form, the domains that I wanted the API to limit itself. For instance, for the US, my list included domains such as washingtonpost.com, cnn.com, latimes.com, msnbc.com, foxnews.com, ap.org, nytimes.com, nypost.com etc. For the world file, I tried to inject names that I knew would yield a diverse, yet nationally legitimate output: lemonde.fr, tagesspiegel.de ,zeit.de, elmundo.es, globo.com, lagaceta.com.ar, repubblica.it, lenta.ru, jpost.com, xinhuanet.com, smh.com.au, timesofindia.indiatimes.com, thehindu.com.

#### Translation API:

The task: automatically translate each headline, as quickly and accurately as possible, and at minimal cost. 
Problem: while there was an abundance of services offering translation (Google Cloud ML, Microsoft, IBM…), they all imposed strict limitations on the number of queries, which would have made experimentation impossible, or required that I provide payment. 
At last, I found a free service with solid results, provided by Yandex, a Russian tech company traded on Nasdaq which was free and allowed me to send my texts via a relatively straightforward POST call.
