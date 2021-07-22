// konstruktorska f-ja za program

class Program {
  constructor(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
  }

  addMovie = function (movie) {
    if (!movie || !(movie instanceof Movie)) {
      return ('Invalid input!');
    }
    this.listOfMovies.push(movie);
  }

  numOfMovies = function () {
    return this.listOfMovies.length;
  }

  programDuration = function () {
    var duration = 0;
    this.listOfMovies.forEach(function (movie) {
      duration += movie.length;
    })
    return duration;
  }

  getData = function () {
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    var date = day + '.' + month + '.' + year;
    var result = date;
    if (this.numOfMovies() === 0) {
      return result += ', Program to be announced.';
    }
    return result += ', ' + this.numOfMovies() + ' movies, duration: ' + this.programDuration() + 'min';
  }
}

export default Program;