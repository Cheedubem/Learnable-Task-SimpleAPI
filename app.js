// this is a constructor for the movie class

function Anime(title, genre, year, studio, episodes) {
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
const anime1 = new movie("Berserk", "Seinen", 2023, "GEMBA", 75);
const anime2 = new movie("Naruto", "Shounen", 2000, "Unknown", "500+");
const anime2 = new movie("Bleach", "Shounen", 2000, "Unknown", "500+");
