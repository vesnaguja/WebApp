
// konstruktorska f-ja za festival

class Festival {
  constructor() {
    this.listOfAllMovies = [];
    this.listOfPrograms = [];
  }

  addMovie = function (movie) {
    this.listOfAllMovies.push(movie);
  }

  addProgram = function (program) {
    this.listOfPrograms.push(program);
  }
}

export default Festival;