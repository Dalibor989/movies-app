import React, { useEffect } from 'react';
import './styles/App.css';
import AppMovies from './containers/AppMovies';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './containers/Register';
import AddMovie from './containers/AddMovie';
import Login from './containers/Login';
import NavBar from './components/NavBar';
import GuestRoute from './components/shared/GuestRoute';
import PrivateRoute from './components/shared/PrivateRoute';
import { getActiveUser } from "./store/activeUser";
import store from './store';

function App() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setTimeout(() => {
        store.dispatch(getActiveUser());
      }, 2000);
    }
  }, []);

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
          <PrivateRoute exact path="/add">
            <AddMovie />
          </PrivateRoute>
          <GuestRoute exact path="/login">
            <Login />
          </GuestRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
