import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../Login/Login.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const API_KEY = 'AIzaSyBiaxomOFD2z_BkztXkMcUo7i-nlMCvU1s';

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );

      const { idToken } = response.data;
      console.log('✅ User signed up, JWT:', idToken);

      setLoading(false);
      navigate('/login');
    } catch (err) {
      console.error(err);
      setError('Signup failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Sign Up</h1>

      {error && (
        <div className="form-error">
          {error}
        </div>
      )}

      <form className="form" onSubmit={handleSignup}>
        <div className="form-group">
          <label className="label">Email</label>
          <input
            type="email"
            placeholder="test@gmail.com"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Password</label>
          <input
            type="password"
            placeholder="••••••"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="btn-container">
          {loading ? (
            <div className="loading">
              <div className="spin"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="submit-btn"
            >
              Sign Up
            </button>
          )}
        </div>
      </form>

      <p className="account">
        Already have an account?{' '}
        <Link to="/login" className="login-link">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
