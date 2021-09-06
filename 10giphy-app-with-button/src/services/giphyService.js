export const getGifs = (searchedString) => {

  const APIKEY = 'eryAho3hh8a812DTEuBUtMhp8yINfhAe';

  const url = `https://api.giphy.com/v1/gifs/search?q=${searchedString}&api_key=${APIKEY}&limit=9`;
  return fetch(url)
    .then(response => response.json())
    .then(res => res.data)

}


// https://api.giphy.com/v1/gifs/search?q=happy&api_key=eryAho3hh8a812DTEuBUtMhp8yINfhAe&limit=9