import React, { useState } from "react";
import authService from "../services/AuthService";

function Register() {
  const [credentials, setCredentials] = useState({
    'name': '',
    'email': '',
    'password': '',
    'password_confirmation': '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await authService.register(credentials);

    console.log(user);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input required placeholder="Name..." type="text" value={credentials.name} onChange={({ target }) => setCredentials({...credentials, name: target.value})}/>
        <input required placeholder="Email..." type="email" value={credentials.email} onChange={({ target }) => setCredentials({...credentials, email: target.value})}/>
        <input required placeholder="Password" type="password" value={credentials.password} onChange={({ target }) => setCredentials({...credentials, password: target.value})}/>
        <input required placeholder="Confirm password" type="password" value={credentials.password_confirmation} onChange={({ target }) => setCredentials({...credentials, password_confirmation: target.value})}/>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register;