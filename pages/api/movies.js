import { movieStore } from './store';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const movies = movieStore.getMovies();
    return res.status(200).json(movies);
  }

  if (req.method === 'POST') {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required.' });
    }

    const newMovie = movieStore.addMovie(title, description);
    return res.status(201).json(newMovie);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
