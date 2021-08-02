// get page from URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pageNumber = urlParams.get('page') || 1;



const charactersUrl = 'https://rickandmortyapi.com/api/character?page=' + pageNumber;

console.log(charactersUrl)

function getPageNumberFromUrl(url) {
   if(url) return url.split('=')[1];
   else return null;
}


const galleryElement = document.querySelector('.gallery');
const paginationElement = document.querySelector('.pages');

fetch(charactersUrl)
  .then(response => response.json())
  .then(data => {

    // paginacija
    const paginationHtml = paginationHtmlTemplate
      .replace('#PREV_LINK#', './index.html?page=' + getPageNumberFromUrl(data.info.prev))
      .replace('#NEXT_LINK#', './index.html?page=' + getPageNumberFromUrl(data.info.next));

    paginationElement.innerHTML = paginationHtml;

    // galerija
    data.results.forEach(el => {
      const image = el.image;
      const name = el.name;
      const id = el.id;

      galleryElement.innerHTML += `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm d-flex justify-content-center">
      <div class="card img-and-name col-xl-3 col-lg-4 col-md-6 col-sm p-2 border-0 bg-transparent" style="width: 16rem;" data-character="${id}"> 
      <div class="rounded bg-light">  
      <img src="${image}" class="card-img-top img-fluid" alt="..." data-character="${id}">
      <div class="card-body">
      <h6 class="card-title" data-character="${id}">${name}</h6>       
      <a href="#" class="btn btn-outline-primary d-flex justify-content-center"><img class="pe-2 " src="./images/hand-thumbs-up.svg">Like</a>
      </div>
      </div> 
      </div>
      </div>     
    `;

      let cardElements = document.querySelectorAll('.img-and-name');
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





const paginationHtmlTemplate = `<ul id="first" class="pagination justify-content-center mt-3">
    <li class="page-item ${(pageNumber==1)?'disabled':''}">
      <a class="page-link bg-dark text-white" href="#PREV_LINK#">
        << </a>
    </li>
    <li class="page-item"><a class="page-link text-dark" href="#">1</a></li>
    <li class="page-item"><a class="page-link text-dark" href="#">2</a></li>
    <li class="page-item"><a class="page-link text-dark" href="#">3</a></li>
    <li class="page-item"><a class="page-link text-dark" href="#">4</a></li>
    <li class="page-item"><a class="page-link text-dark" href="#">5</a></li>
    <li class="page-item">
      <a class="page-link bg-dark text-white" href="#NEXT_LINK#"> >> </a>
    </li>
    </ul>`;