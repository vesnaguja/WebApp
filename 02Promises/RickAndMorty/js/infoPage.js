const character = window.localStorage.getItem('characterId');
const characterSchemaUrl = 'https://rickandmortyapi.com/api/character/' + character;

const infoCont = document.querySelector('.info-cont');

fetch(characterSchemaUrl)
  .then(response => response.json())
  .then(data => {   
    infoCont.innerHTML +=`
  <div><img src="${data.image}" class="img-fluid mx-auto d-block" id="character-img"></div>
  <div class="p-3 text-primary"><h1 id="character-name">${data.name}<h1></div> 

  <div class="container p-3 d-flex row justify-content-center">
    <div class="col-md-6 col-lg-4 col-xl-2">
      <h3>Status</h3>
      <p>${data.status}</p>
    </div>

    <div class="col-md-6 col-lg-4 col-xl-2">
      <h3>Species</h3>
      <p>${data.species}</p>
    </div>

    <div class="col-md-6 col-lg-4 col-xl-2">
      <h3>Gender</h3>
      <p>${data.gender}</p>
    </div>

    <div class="col-md-6 col-lg-4 col-xl-2">
      <h3>Origin</h3>
      <p>${data.origin.name}</p>
    </div>

    <div class="col-md-6 col-lg-4 col-xl-2">
      <h3>Location</h3>
      <p>${data.location.name}</p>
    </div>
  </div>`    
  })

  