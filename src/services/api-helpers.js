makeUKNewsCall = async () => {
  let queryLink = 'https:newsapi.org/v2/top-headlines?' +
      'country=gb&' +
      'apiKey=ded05226f8e9489888443d1b682e93c6';
  const response = await axios.get(queryLink);

  let UKNewsList = response.data.articles.map((d,i)=>{
    let UKNewsItem = {
      title: d.title,
      image: d.urlToImage,
      summary: d.description
    }
    console.log('UKNewsItem', UKNewsItem)
    return UKNewsItem;
    });
  return UKNewsList;
}
