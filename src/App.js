import React from 'react';
import './styles/App.css';
import AppMovies from './containers/AppMovies';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './containers/Register';
import AddMovie from './containers/AddMovie';
import Login from './containers/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
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
