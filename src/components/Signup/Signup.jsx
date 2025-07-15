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
    <div className="bg-purple-950 p-5 mt-5 w-[50%] mx-auto rounded-lg shadow-lg">
      <h1 className="font-bold text-white text-2xl text-center">Sign Up</h1>

      {error && (
        <div className="bg-red-500 text-white font-semibold p-3 mt-4 text-center rounded-md">
          {error}
        </div>
      )}

      <form className="flex flex-col" onSubmit={handleSignup}>
        <div className="flex flex-col mt-4">
          <label className="font-bold text-white text-center">Email</label>
          <input
            type="email"
            placeholder="test@gmail.com"
            className="bg-purple-100 p-3 text-black rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="font-bold text-white text-center">Password</label>
          <input
            type="password"
            placeholder="••••••"
            className="bg-purple-100 p-3 text-black rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mt-4 w-[15%] mx-auto">
          {loading ? (
            <div className="flex justify-center">
              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="bg-white text-black p-3 font-bold text-purple-950 border rounded-lg w-full hover:bg-gray-200"
            >
              Sign Up
            </button>
          )}
        </div>
      </form>

      <p className="text-center text-white mt-4">
        Already have an account?{' '}
        <Link to="/login" className="underline text-blue-300">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
