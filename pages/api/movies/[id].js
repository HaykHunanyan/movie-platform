import { movieStore } from '../store';

export default async function handler (req, res) {
  const { id } = req.query;
  if (req.method === 'DELETE') {
    await movieStore.deleteMovie(parseInt(id));
    const movies = await movieStore.getMovies()
    return res.status(200).json(movies);
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
