let movies = [
  {
    id: 1,
    title: "Shadows of Tomorrow",
    description: "In a near-future world, technology has unlocked the ability to predict human actions through powerful algorithms.",
  },
  {
      id: 2,
      title: "Inception",
      description: "A mind-bending thriller"
  }
];
  
  export const movieStore = {
    getMovies() {
      return movies;
    },
  
    getMovie(id) {
      return movies.find(movie => movie.id === id);
    },
  
    addMovie(title, description) {
      const newMovie = { id: Date.now(), title, description };
      movies.push(newMovie);
      return newMovie;
    },
  
    deleteMovie(id) {
      movies = movies.filter(movie => movie.id !== parseInt(id));
    }
  };
  