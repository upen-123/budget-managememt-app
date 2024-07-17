// frontend/src/components/Login.js
import React, { useState } from 'react';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    console.log('Login successful');
    window.location.href = '/transactions'; // Redirect to add transaction page
  };

  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn">Login</button>
        <p className="login-footer">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </form>
    </div>
  );
}

export default Login;

