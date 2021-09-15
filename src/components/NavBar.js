import { Link } from 'react-router-dom';
import MoviesSearch from './MoviesSearch';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectActiveUser, selectIsAuthenticated } from "../store/activeUser";

function NavBar() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const activeUser = useSelector(selectActiveUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{display: 'flex', justifyContent: 'space-evenly'}}>
      {isAuthenticated ? <h5>Active User: {activeUser && activeUser.name}</h5> : <h5>Welcome Guest</h5>}
      <h5 className="nav-link"><Link to="/movies">Movies</Link></h5>
      {isAuthenticated && (
      <h5 className="nav-link"><Link to="/add">Add Movies</Link></h5>
      )}
      {!isAuthenticated && (
      <h5 className="nav-link"><Link to="/register">Register</Link></h5>
      )}
      {!isAuthenticated && (
      <h5 className="nav-link"><Link to="/login">Login</Link></h5>
      )}
      {isAuthenticated && (
        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
      )}
      <MoviesSearch />
    </nav>
  )
}

export default NavBar;