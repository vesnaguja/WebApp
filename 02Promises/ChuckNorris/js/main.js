const buttonElement = document.querySelector('#button');
const jokeContainer = document.querySelector('.joke-container');

const url = 'https://api.chucknorris.io/jokes/random';


buttonElement.addEventListener('click', () => {
  fetch(url)
    .then((response) => {
      return response.json();
    }).then(data => {     
      jokeContainer.innerHTML = ''; 
      let joke = data.value;
      const jokePar = document.createElement('p');
      jokePar.classList.add('joke-text');
      jokePar.textContent = joke;
      jokeContainer.append(jokePar);     
    })
});