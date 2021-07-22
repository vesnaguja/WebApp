// konstruktorska f-ja za movie
class Movie {
  constructor(title, length, genre) {
    this.title = title;
    this.length = parseInt(length);
    this.genre = genre;
  }

  getData = function () {
    return this.title + ', ' + this.length + 'min, ' + (this.genre[0] + this.genre[this.genre.length - 1]).toUpperCase();
  }
}

export default Movie;