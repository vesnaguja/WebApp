export const getTopStories = () => {
  const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
  return fetch(url)
    .then(response => response.json())
    .then(data => {

      const top10 = data.slice(0, 10);
      // let articleList = [];

      // top10.forEach(singleArticleId => {
      //   const singleArticleUrl = `https://hacker-news.firebaseio.com/v0/item/${singleArticleId}.json`;

      //   // fetch(singleArticleUrl)
      //   //   .then(response => response.json())
      //   //   .then(data => articleList.push(data));

      // })

      return top10;

    });

}