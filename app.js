// this is a constructor for the movie class

function anime(title, genre, year, studio, episodes) {
  this.title = title;
  this.genre = genre;
  this.year = year;
  this.episodes = episodes;
  this.studio = studio;
  this.isAvailable = true;

  // this method gets movie information
  this.getAnimeInfo = function () {
    return `${this.title} (${this.year}), Genre: ${this.genre}, Studio: ${this.studio}, Episodes: ${this.episodes}`;
  };

  // this method rents the movie
  this.rentAnime = function () {
    if (this.isAvailable) {
      this.isAvailable = false;
      return `${this.title} has been rented. Enjoy your show!`;
    } else {
      return `${this.title} is not available for rent`;
    }
  };
}

// Creating some movie objects
const anime1 = new anime("Berserk", "Seinen", 2023, "GEMBA", 75);
const anime2 = new anime("Naruto", "Shounen", 2000, "Unknown", 500);
const anime3 = new anime("Bleach", "Shounen", 2001, "Unknown", 375);
const anime4 = new anime("Orange", "Romance", 2015, "Unknown", 25);

// I need to store toh movies in an array to loop through it
const storedAnimes = [
    anime1,
    anime2,
    anime3,
    anime4;
];

// to get the animes by genre
function selectAnimesByGenre(genre){
    const selectedAnime = storedAnimes.filter(anime => anime.genre === genre)
        return selectedAnime;
}

// Choose Genre and Display Genre animes romance, just switch genre names
const romance = selectAnimesByGenre("romance");
console.log("Romance Animes: ");
romance.forEach(movie => console.log(anime.getAnimeInfo()));
