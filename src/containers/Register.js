import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/activeUser/slice";

function Register() {
  const [credentials, setCredentials] = useState({
    'name': '',
    'email': '',
    'password': '',
    'password_confirmation': '',
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('register', e)
    dispatch(register());
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input required className="form-control" id="name" placeholder="Name..." type="text" value={credentials.name} onChange={({ target }) => setCredentials({...credentials, name: target.value})}/>
          <label htmlFor="email">Email</label>
          <input required className="form-control" id="email" placeholder="Email..." type="email" value={credentials.email} onChange={({ target }) => setCredentials({...credentials, email: target.value})}/>
          <label htmlFor="password">Password</label>
          <input required className="form-control" id="password" placeholder="Password" type="password" value={credentials.password} onChange={({ target }) => setCredentials({...credentials, password: target.value})}/>
          <label htmlFor="password_confirmation">Confirm password</label>
          <input required className="form-control" id="password_confirmation" placeholder="Confirm password" type="password" value={credentials.password_confirmation} onChange={({ target }) => setCredentials({...credentials, password_confirmation: target.value})}/>
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register;