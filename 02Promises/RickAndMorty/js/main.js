import Character from "./Characters.js";

const character = new Character()

const galleryElement = document.querySelector('.gallery');

const requestUrl = 'https://rickandmortyapi.com/api/character';
fetch(requestUrl)
  .then(response => {
    return response.json();
  }).then(data => {
    console.log(data.results);

    data.results.forEach(el => {
      const image = el.image;
      const name = el.name;
      let id = el.id;
     

      galleryElement.innerHTML += `
      <div class="card lik col-4 m-3 p-2" style="width: 18rem;" data-character="${id}">
      <img src="${image}" class="card-img-top img-fluid" alt="..." data-character="${id}">
      <div class="card-body">
      <h5 class="card-title" data-character="${id}">${name}</h5>       
      <a href="#" class="btn btn-primary"><img class="pe-1 " src="./images/hand-thumbs-up.svg">Like</a>
      </div>
      </div>      
    `;

    })
  });


  
  let card = document.querySelector('.lik');
  // console.log(card);
  document.addEventListener('click', '.lik', function (e) {
    let character = e;
    console.log(character);
    window.localStorage.removeItem('characterId');
    window.localStorage.setItem('characterId', character);
    window.open('./infoPage.html', '_self');

  });
