import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieRow from '../components/MovieRow';
import { getMovies, selectMovies } from '../store/movies';

function AppMovies() {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  const [sortCriteria, setSortCriteria] = useState("id");
  const [sortDirection, setSortDirection] = useState(1);

  const sortedMovies = [...movies.data].sort((m1, m2) => {
    if(m1[sortCriteria] < m2[sortCriteria]) {
      return -1 * sortDirection;
    }
    if(m1[sortCriteria] > m2[sortCriteria]) {
      return 1 * sortDirection;
    }
    return 0;
  })

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  function sortBy(criteria) {
    setSortCriteria(criteria);

    if(criteria == sortCriteria) {
      setSortDirection(-1 * sortDirection);
    } else {
      setSortDirection(1);
    }
  }

  return (
    <div>
    {sortedMovies.length ? (
      <div>
        <h3 onClick={() => {sortBy("title")}}>Title</h3>
        <h3 onClick={() => {sortBy("director")}}>Director</h3>
        <ul className="list-group">
          {sortedMovies.map((movie) => (
            <MovieRow key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
      ) : (
        <div>There are no movies with that title.</div>
        )}
    </div>
  )
}

export default AppMovies;