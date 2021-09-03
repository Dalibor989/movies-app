import React from 'react';
import './styles/App.css';
import AppMovies from './pages/AppMovies';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <h3><Link to="/movies">Movies</Link></h3>
          <h3><Link to="/register">Register</Link></h3>
        </nav>
        <Switch>
          <Route exact path="/movies">
            <AppMovies />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
