import { movies } from "../constants/movies"
let movieList = [...movies]
export const movieStore = {
    getMovies() {
      return movieList;
    },
  
    getMovie(id) {
      return movieList.find(movie => movie.id === id);
    },
  
    addMovie(title, description) {
      const newMovie = { id: Date.now(), title, description };
      movieList.push(newMovie);
      return newMovie;
    },
  
    deleteMovie(id) {
      movieList = movieList.filter(movie => movie.id !== parseInt(id));
    }
};
  