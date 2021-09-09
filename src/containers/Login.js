import { useState } from "react";
import { useHistory } from "react-router";
import authService from "../services/AuthService";

function Login() {
  const history = useHistory();

  const [credentials, setCredentials] = useState({
    'email': '',
    'password': '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await authService.login(credentials);
    console.log(user);

    history.push('/movies');
  }

  const handleEmailChange = (e) => {
    setCredentials({
      ...credentials,
      email: e.target.value,
    })
  }

  const handlePasswordChange = (e) => {
    setCredentials({
      ...credentials,
      password: e.target.value,
    })
  }

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="emai">Email address</label>
          <input type="email" className="form-control" id="emai" placeholder="Enter email" value={credentials.email} onChange={handleEmailChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" value={credentials.password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login;