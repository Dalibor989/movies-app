function MovieRow({ movie }) {
  return (
    <div className="container">
      <div className="col-md">
        <img src={movie.image_url} width="30%"/>
      </div>
      <div className="col-md"><p>{movie.title}</p></div>
      <div className="col-md"><p>{movie.director}</p></div>
    </div>
  )
}

export default MovieRow;