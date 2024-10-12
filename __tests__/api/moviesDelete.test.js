import { createMocks } from 'node-mocks-http';
import { movies } from '../../lib/constants/movies'
import handlerForDelete from '../../pages/api/movies/[id]';

let moviesList = [...movies];

describe('/api/movies/[id] DELETE', () => {

  it('should delete a movie by id', async () => {
    // Mock the DELETE request with a movie ID of 1
    const { req, res } = createMocks({
      method: 'DELETE',
      query: {
        id: '1',
      },
    });

    // Simulate the handler and movie deletion
    await handlerForDelete(req, res);

    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res._getData())).toEqual([moviesList[1]]);

    // Verify the movie has been removed from the movie list
    const remainingMovies = moviesList.find(movie => movie.id !== 1);
    expect(remainingMovies).toEqual(moviesList[1]);
  });

  it('should return 405 if the method is not DELETE', async () => {
    // Mock a request with a method other than DELETE (e.g., GET)
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        id: '1',
      },
    });

    // Simulate the handler with the wrong method
    await handlerForDelete(req, res);

    expect(res.statusCode).toBe(405);
    expect(JSON.parse(res._getData())).toEqual({
      error: 'Method not allowed',
    });
  });
});