const url = 'https://jsonplaceholder.typicode.com/posts';

export const getBlogs = () => {
  return fetch(url)
    .then(response => response.json())
}