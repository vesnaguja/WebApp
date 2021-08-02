const galleryElement = document.querySelector('.gallery');

const charactersUrl = 'https://rickandmortyapi.com/api/character';

fetch(charactersUrl)
  .then(response => {
    return response.json();

  }).then(data => {
    console.log(data);
    data.results.forEach(el => {
      const image = el.image;
      const name = el.name;
      const id = el.id;
      console.log(id);

      galleryElement.innerHTML += `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm d-flex justify-content-center">
      <div class="card img-and-name col-xl-3 col-lg-4 col-md-6 col-sm p-2 border-0" style="width: 18rem;" data-character="${id}"> 
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

      let cardElements = document.querySelectorAll('.img-and-name');
      console.log(cardElements);
      cardElements.forEach(card => {
        card.addEventListener('click', e => {
          var character = e.target.dataset.character;
          window.localStorage.clear();
          window.localStorage.setItem('characterId', character);
          window.open('./infoPage.html', "_self");
        })
      });


    });
  });