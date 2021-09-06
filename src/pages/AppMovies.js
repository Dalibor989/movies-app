import React, {useState, useEffect} from 'react';
import movieService from '../services/MovieService';

function AppMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await movieService.getAll();

      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <ul className="list-group">
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default AppMovies;