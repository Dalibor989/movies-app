import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/movies/slice";


function AddMovie() {
  const dispatch = useDispatch();

  const [newMovie, setNewMovie] = useState({
    'title': '',
    'director': '',
    'image_url': '',
    'duration': 0,
    'release_date': '',
    'genre': '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(addMovie(newMovie));

    setNewMovie({
      'title': '',
      'director': '',
      'image_url': '',
      'duration': 0,
      'release_date': '',
      'genre': '',
    });
  }

  const handleTitleChange = (e) => {
    setNewMovie({
      ...newMovie,
      title: e.target.value,
    })
  }

  const handleDirectorChange = (e) => {
    setNewMovie({
      ...newMovie,
      director: e.target.value,
    })
  }
  
  const handleImageChange = (e) => {
    setNewMovie({
      ...newMovie,
      image_url: e.target.value,
    })
  }

  const handleDurationChange = (e) => {
    setNewMovie({
      ...newMovie,
      duration: e.target.value,
    })
  }

  const handleDateChange = (e) => {
    setNewMovie({
      ...newMovie,
      release_date: e.target.value,
    })
  }

  const handleGenreChange = (e) => {
    setNewMovie({
      ...newMovie,
      genre: e.target.value,
    })
  }

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Movie title</label>
          <input type="text" className="form-control" id="title" placeholder="Enter title" value={newMovie.title} onChange={handleTitleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="director">Director</label>
          <input type="text" className="form-control" id="director" placeholder="Director" value={newMovie.director} onChange={handleDirectorChange} />
        </div>
        <div className="form-group">
          <label htmlFor="image_url">Image</label>
          <input type="url" className="form-control" id="image_url" placeholder="Image url" value={newMovie.image_url} onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Movie duration</label>
          <input type="number" className="form-control" id="duration" placeholder="Duration" value={newMovie.duration} onChange={handleDurationChange} />
        </div>
        <div className="form-group">
          <label htmlFor="release_date">Release date</label>
          <input type="date" className="form-control" id="release_date" placeholder="release_date" value={newMovie.release_date} onChange={handleDateChange} />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input type="text" className="form-control" id="genre" placeholder="Genre" value={newMovie.genre} onChange={handleGenreChange} />
        </div>
        <button className="btn btn-primary">Add Movie</button>
      </form>
    </div>
  )
}

export default AddMovie;