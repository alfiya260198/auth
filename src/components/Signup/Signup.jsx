import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

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
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up</h1>

      {error && (
        <div className="signup-error">
          {error}
        </div>
      )}

      <form className="signup-form" onSubmit={handleSignup}>
        <div className="signup-group">
          <label className="signup-label">Email</label>
          <input
            type="email"
            placeholder="test@gmail.com"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="signup-label">Password</label>
          <input
            type="password"
            placeholder="••••••"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="loading-btn-container">
          {loading ? (
            <div className="loading-signup">
              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="signup-button"
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
