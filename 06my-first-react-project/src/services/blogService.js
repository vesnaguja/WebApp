const url = 'https://jsonplaceholder.typicode.com/posts';

export const getBlogs = () => {
  return fetch(url)
    .then(response => response.json()).then(blogs => {
      return blogs.map(blog => {
        return {
          title: blog.title,
          body: blog.body,
          id: blog.id
        }
      })
    })
}

export const getBlog = (id) => {
  return fetch(`${url}/${id}`)
    .then(response => response.json())
}