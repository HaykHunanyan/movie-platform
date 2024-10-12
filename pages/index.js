import React,{ useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const handleAddMovie = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title'); // Access the title
    const description = formData.get('description');
    console.log(title,'title')
    console.log(description,'description')
    e.target.reset();
  };

  const handleDeleteMovie = async (id) => {
    console.log(id,'id')
  };

  const filteredMovies = movies.filter(el => el.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container">
      <h1>Movie Management Platform</h1>
      <input
        type="text"
        placeholder="Search movies"
        value={search}
        className="search-input"
      />

      <form onSubmit={handleAddMovie} className="movie-form">
        <input
          type="text"
          name="title" 
          placeholder="Title"
          required
        />
        <textarea
          name="description" 
          placeholder="Description"
          required
        />
        <button type="submit">Add Movie</button>
      </form>

      <ul className="movie-list">
        {filteredMovies.map(el => (
          <li key={el.id} className="movie-item">
            <div>
              <h2>{el.title}</h2>
              <p>{el.description}</p>
            </div>
            <button onClick={() => handleDeleteMovie(el.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .container {
          width: 600px;
          margin: 0 auto;
        }
        h1 {
          text-align: center;
        }
        .search-input {
          width: 100%;
          padding: 8px;
          margin-bottom: 20px;
        }
        .movie-form {
          display: flex;
          flex-direction: column;
          margin-bottom: 30px;
        }
        .movie-form input, .movie-form textarea {
          margin-bottom: 10px;
          padding: 10px;
          font-size: 16px;
        }
        .movie-form button {
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
        }
        .movie-list {
          list-style-type: none;
          padding: 0;
        }
        .movie-item {
          border: 1px solid #ddd;
          margin-bottom: 20px;
          background-color: #f9f9f9;
          border-radius: 4px;
          width: 100%;
          display:flex;
          justify-content: space-between;
          height:100px;
        }
        .movie-item div h2 {
          margin-top: 0;
        }
        .movie-item div {
          margin-top: 0;
          padding:10px;
          width: calc(100% - 100px);
          color:black;
          overflow-y: auto;
          max-height: 100px;
        }
        .movie-item button {
          cursor: pointer;
          width: 100px;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          background-color: #EA4C89;
          border-radius: 8px;
          border-style: none;
          box-sizing: border-box;
          color: #FFFFFF;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: 500;
          height:100px;
          line-height: 20px;
          list-style: none;
          margin: 0;
          outline: none;
          padding: 10px 16px;
          position: relative;
          text-align: center;
          text-decoration: none;
          transition: color 100ms;
          vertical-align: baseline;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
        }
        .movie-item button:hover,
        .movie-item button:focus {
          background-color: #F082AC;
        }
      `}</style>
    </div>
  );
}
