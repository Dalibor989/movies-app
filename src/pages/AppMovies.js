import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, selectMovies, setMovies } from '../store/movies';

function AppMovies() {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <ul className="list-group">
        {movies.data.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default AppMovies;