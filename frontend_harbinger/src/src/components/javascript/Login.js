import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { email, password };

    fetch('login/authenticate-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        setMessage(data.error);
      } else {
        // Call the onLogin function after a successful login
        onLogin();
        // Navigate to the investment portfolio page after a successful login
        navigate('/my-dashboard');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;