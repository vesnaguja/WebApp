// get page from URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let pageNumber = +urlParams.get('page') || 1;

// provera da li je pageNumber unutar raspona postojecih stranica ( od 1 do 34 )
if (pageNumber < 1 || pageNumber > 34) pageNumber = 1;

const charactersUrl = 'https://rickandmortyapi.com/api/character?page=' + pageNumber;

const galleryElement = document.querySelector('.gallery');
const paginationElement = document.querySelector('.pages');

fetch(charactersUrl)
  .then(response => response.json())
  .then(data => {

    // paginacija
    const previousLink = './index.html?page=' + getPageNumberFromUrl(data.info.prev);
    const nextLink = './index.html?page=' + getPageNumberFromUrl(data.info.next);

    paginationElement.innerHTML = paginationTemplate(pageNumber, Math.ceil(data.info.count / 20), previousLink, nextLink);

    // galerija
    data.results.forEach(el => {
      const image = el.image;
      const name = el.name;
      const id = el.id;

      galleryElement.innerHTML += galleryTemplate(id, name, image);

      const likeButtons = document.querySelectorAll('#like-button');

      likeButtons.forEach(likeButton => {

        likeButton.addEventListener('click', (e) => {
          e.preventDefault();
          
          if (likeButton.classList.contains('btn-outline-primary')) {
            likeButton.classList.remove('btn-outline-primary');
            likeButton.classList.remove('text-primary');

            likeButton.classList.add('btn-primary');
            likeButton.classList.add('text-white');
          } else {
            likeButton.classList.remove('btn-primary');
            likeButton.classList.remove('text-white');

            likeButton.classList.add('btn-outline-primary');
            likeButton.classList.add('text-primary');
          }
        });
      });

      // card click logic
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


const getPageNumberFromUrl = url => {
  if (url) return url.split('=')[1];
  else return null;
}


const paginationNumbers = (number, lastPage) => {
  if (number < 3 || number > lastPage)
    return [1, 2, 3, 4, 5];
  if (number >= 3 && number <= lastPage - 2)
    return [number - 2, number - 1, number, number + 1, number + 2]
  if (number === lastPage || number === lastPage - 1)
    return [lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage]
}

const paginationTemplate = (pageNumber, maxPageNumber, previous, next) => {
  return `
<ul id="first" class="pagination justify-content-center mt-3">
  <li class="page-item ${(pageNumber===1)?'disabled':''}">
    <a class="page-link bg-dark text-white" href="${previous}">&laquo;</a>
  </li>

  <!-- pagination number buttons -->
  ${paginationNumbers(pageNumber, maxPageNumber).map(number => `
    <li class="page-item ${(pageNumber===number)?'active':''}">
      <a class="page-link text-dark" href="./index.html?page=${number}">${number}</a>
    </li>`).join('')}

  <li class="page-item ${(pageNumber===maxPageNumber)?'disabled':''}">
    <a class="page-link bg-dark text-white" href="${next}">&raquo;</a>
  </li>
</ul>`;
}


const galleryTemplate = (id, name, image) => {
  return `<div class="col-xl-3 col-lg-4 col-md-6 col-sm p-2 d-flex justify-content-center">
    <div class="card bg-light h-100" style="width: 16rem;"> 
        <img src="${image}" class="card-img-top img-fluid img-and-name" alt="..." data-character="${id}">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title img-and-name" data-character="${id}">${name}</h5>       
            <a href="./index.html" id="like-button" class="btn btn-outline-primary d-flex justify-content-center">
              <div>
                <img class="pe-2" src="./images/hand-thumbs-up.svg">
                Like
              </div>
            </a>
        </div>
    </div>
  </div>`;
}

