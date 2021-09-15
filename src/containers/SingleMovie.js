import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovie, selectMovie } from "../store/movies";

function SingleMovie() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movie = useSelector(selectMovie);

  useEffect(() => {
    console.log('Single movie', movie)
    dispatch(getMovie(id));
  }, [id]);

  if (!movie) {
    return null;
  }

  return (
    <div>
      <h3>{movie.title}</h3>

      <p><strong>Director: </strong> {movie.director}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Duration:</strong> {movie.duration}</p>
      <p><strong>Release date:</strong> {movie.release_date}</p>
      
      <img src={movie.image_url} alt="Movie poster" />
    </div>
  )
}

export default SingleMovie;