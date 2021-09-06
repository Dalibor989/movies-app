import React from 'react';
import './styles/App.css';
import AppMovies from './pages/AppMovies';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import AddMovie from './pages/AddMovie';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <h5 className="nav-link"><Link to="/movies">Movies</Link></h5>
          <h5 className="nav-link"><Link to="/add">Add Movies</Link></h5>
          <h5 className="nav-link"><Link to="/register">Register</Link></h5>
          <h5 className="nav-link"><Link to="/login">Login</Link></h5>
        </nav>
        <Switch>
          <Route exact path="/movies">
            <AppMovies />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/add">
            <AddMovie />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
