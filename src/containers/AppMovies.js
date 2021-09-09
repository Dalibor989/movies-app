import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieRow from '../components/MovieRow';
import { getMovies, selectMovies } from '../store/movies';

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
          <MovieRow key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default AppMovies;