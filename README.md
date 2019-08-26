This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## NEWSWINDOW: How the World VIEWS the News

NewsWindow allows readers to compare how top news is reported across countries. Upon opening the site, the reader gets three windows offering the top news in the US, UK and the English-speaking rest of the world.
Then the user is invited to type a search term, which will return a list of (100?) stories grouped by country of origin.

##LINKS:

-- Repo: https://github.com/mfhan/newswindow  
-- Deployment:


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

### Issues and Resolutions

Brace for a hundred-pager here
