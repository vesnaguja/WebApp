import Movie from './Movie.js';
import Program from './Program.js';
import Festival from './Festival.js';

const festival = new Festival();


const inputTitleElement = document.querySelector('#title');
const inputLengthElement = document.querySelector('#length');
const selectGenreElement = document.querySelector('#genre');

const movieErrorElement = document.querySelector('#movie-error');
const movieSelectElement = document.querySelector('#movie-select');
const ulMovieListElement = document.querySelector('#movie-list');
const createMovieButton = document.querySelector('#create-movie');

const inputDateElement = document.querySelector('#date');
const programErrorElement = document.querySelector('#program-error');
const ulProgramListElement = document.querySelector('#program-list');
const programSelectElement = document.querySelector('#program-select');
const createProgramButton = document.querySelector('#create-program')

const addMovieToProgramButton = document.querySelector('#add-movie');

const selectMovieElement = document.querySelector('#movie-select');
const selectProgramElement = document.querySelector('#program-select');

// kreiranje filma
const addMovie = () => {
  const titleValue = inputTitleElement.value;
  const lengthValue = inputLengthElement.value;
  const genreValue = selectGenreElement.value;

  if (!titleValue || !lengthValue || !genreValue.replace('-', '')) {
    movieErrorElement.textContent = 'All input fields are required!';
    return;
  } else {
    movieErrorElement.textContent = '';
  }

  const movie = new Movie(titleValue, lengthValue, genreValue);

  festival.listOfAllMovies.push(movie);
  const index = festival.listOfAllMovies.length - 1;

  const movieDataLi = document.createElement('li');
  movieDataLi.textContent = movie.getData();
  ulMovieListElement.appendChild(movieDataLi);

  const movieOption = document.createElement('option');
  movieOption.textContent = movie.title;
  movieOption.setAttribute('value', index);
  movieSelectElement.appendChild(movieOption);

  inputTitleElement.value = '';
  inputLengthElement.value = '';
  selectGenreElement.value = '';
}


// kreiranje programa
const addProgram = () => {
  if (!inputDateElement.value) {
    programErrorElement.textContent = 'Date required!';
    return;
  }
  const date = new Date(inputDateElement.value);
  if (date.getTime() < Date.now()) {
    programErrorElement.textContent = 'Invalide date!';
    return;
  }
  hasProgramWithSameDate = festival.listOfPrograms.some(function (program) {
    return date.getTime() === program.date.getTime();
  })

  if (hasProgramWithSameDate) {
    //alert('Program for that date already exists.');
    programErrorElement.textContent = 'Program for that date already exists.';
    return;
  }
  programErrorElement.textContent = '';

  const program = new Program(date);

  festival.listOfPrograms.push(program);
  const index = festival.listOfPrograms.length - 1;

  const li = document.createElement('li');
  li.textContent = program.getData();
  ulProgramListElement.appendChild(li);

  const option = document.createElement('option');
  option.setAttribute('value', index);
  option.textContent = program.getData();
  programSelectElement.appendChild(option);
}

// dodavanje filma u program
const addMovieToProgram = () => {
  const programListElements = document.querySelectorAll('#program-list li');
  const programSelectOptions = document.querySelectorAll('#program-select option');

  const movieValue = selectMovieElement.value;
  const programValue = selectProgramElement.value;

  const movie = festival.listOfAllMovies[movieValue];
  const program = festival.listOfPrograms[programValue];
  
  const oldProgramData = program.getData();

  // da ne dodam isti film 2 puta u program
  const sameMovie = program.listOfMovies.some(function (currentMovie) {
    return movie.getData() === currentMovie.getData();
  })  
  if (sameMovie) {
    alert('Movie already exists in program');
  }

  program.addMovie(movie);

  programListElements.forEach(function (li) {
    if (li.textContent === oldProgramData) {
      li.textContent = program.getData();
    }
  });

  programSelectOptions.forEach(function (option) {
    if (option.textContent === oldProgramData) {
      option.textContent = program.getData();
    }
  })

}

createMovieButton.addEventListener('click', addMovie);
createProgramButton.addEventListener('click', addProgram);
addMovieToProgramButton.addEventListener('click', addMovieToProgram);