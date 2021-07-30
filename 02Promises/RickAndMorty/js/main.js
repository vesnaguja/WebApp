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
      <div class="help col-xl-3 col-lg-4 col-md-6 col-sm d-flex justify-content-center">
      <div class="card lik col-xl-3 col-lg-4 col-md-6 col-sm p-2 border-0" style="width: 18rem;" data-character="${id}"> 
      <div class="border border-primary rounded">  
      <img src="${image}" class="card-img-top img-fluid" alt="..." data-character="${id}">
      <div class="card-body">
      <h6 class="card-title" data-character="${id}">${name}</h6>       
      <a href="#" class="btn btn-primary d-flex justify-content-center"><img class="pe-2 " src="./images/hand-thumbs-up.svg">Like</a>
      </div>
      </div> 
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
