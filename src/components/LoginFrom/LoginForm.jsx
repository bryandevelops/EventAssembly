import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [error, setError] = useState('');
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method will resolve to the user object included in the payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch(error) {
      console.log(error.message)
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="login-emai">Email</label>
          <input type="text" id="login-email" name="email" value={credentials.email} onChange={handleChange} required />
          <label htmlFor="login-password">Password</label>
          <input type="password" id="login-password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}