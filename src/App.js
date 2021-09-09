import React from 'react';
import './styles/App.css';
import AppMovies from './pages/AppMovies';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import AddMovie from './pages/AddMovie';
import Login from './pages/Login';
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
