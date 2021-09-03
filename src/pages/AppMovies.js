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
      <ul>
        {movies.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default AppMovies;