// this is a constructor for the anime class

function anime(title, genre, year, studio, episodes) {
  this.title = title;
  this.genre = genre;
  this.year = year;
  this.episodes = episodes;
  this.studio = studio;
  this.isAvailable = true;

  // this method gets anime information
  this.getAnimeInfo = function () {
    return `${this.title} (${this.year}), Genre: ${this.genre}, Studio: ${this.studio}, Episodes: ${this.episodes}`;
  };

  // this method rents the anime
  this.rentAnime = function () {
    if (this.isAvailable) {
      this.isAvailable = false;
      return `${this.title} has been rented. Enjoy your show!`;
    } else {
      return `${this.title} is not available for rent`;
    }
  };
}

// I need to store toh anime in an array to loop through it
const storedAnimes = [
  new anime("Berserk", "Seinen", 2023, "GEMBA", 75),
  new anime("Naruto", "Shounen", 2000, "Unknown", 500),
  new anime("Bleach", "Shounen", 2001, "Unknown", 375),
  new anime("Orange", "Romance", 2015, "Unknown", 25),
];

// to get the animes by genre
function selectAnimesByGenre(genre) {
  return storedAnimes.filter((anime) => anime.genre === genre);
}

// Choose Genre and Display Genre animes romance, just switch genre names
const romance = selectAnimesByGenre("Romance");
console.log("Romance Animes:");
romance.forEach((anime) => console.log(anime.getAnimeInfo()));
