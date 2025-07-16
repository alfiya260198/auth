import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const API_KEY = 'AIzaSyBiaxomOFD2z_BkztXkMcUo7i-nlMCvU1s';

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );

      const { idToken } = response.data;
      login(idToken);
      navigate('/profile');
      console.log("✅ User logged in, JWT:", idToken);
    } catch (err) {
      console.error('❌ Login failed:', err);
      setError('Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Login</h1>

      {error && (
        <div className="form-error">
          {error}
        </div>
      )}

      <form className="form" onSubmit={handleLogin}>
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
              Login
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
