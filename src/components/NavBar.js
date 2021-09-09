import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <h5 className="nav-link"><Link to="/movies">Movies</Link></h5>
      <h5 className="nav-link"><Link to="/add">Add Movies</Link></h5>
      <h5 className="nav-link"><Link to="/register">Register</Link></h5>
      <h5 className="nav-link"><Link to="/login">Login</Link></h5>
    </nav>
  )
}

export default NavBar;