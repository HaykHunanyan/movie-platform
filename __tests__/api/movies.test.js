import { createMocks } from 'node-mocks-http';
import { movies } from '../../lib/constants/movies'
import handler from '../../pages/api/movies';

let moviesList = [...movies];


describe('/api/movies API', () => {
  
  it('should return an array of movies on GET', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });
    
    await handler(req, res);
    
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(moviesList);
  });

  it('should add a new movie on POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        title: "Inception",
        description: "A mind-bending thriller"
      },
    });
    await handler(req, res);

    expect(res.statusCode).toBe(201);
    const newMovie = JSON.parse(res._getData());
    expect(newMovie).toEqual({
      id: expect.any(Number),
      title: "Inception",
      description: "A mind-bending thriller"
    });

    // Optionally check if the new movie was added to the movie list
    const { req: req2, res: res2 } = createMocks({
      method: 'GET',
    });

    await handler(req2, res2);
    const updatedMovies = JSON.parse(res2._getData());
    expect(updatedMovies.length).toBe(3);
    expect(updatedMovies).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          title: "Inception",
          description: "A mind-bending thriller"
        }
      ])
    );
  });

  it('should return 400 if title or description is missing in POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        title: "", // Missing title
        description: "Some description"
      },
    });

    await handler(req, res);

    expect(res.statusCode).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      error: 'Title and description are required.'
    });
  });
});
