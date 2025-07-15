import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
      console.log('✅ JWT idToken:', idToken);
      setLoading(false);
    } catch (err) {
      console.error('❌ Login failed:', err);
      setError('Authentication failed. Please check your credentials.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-purple-950 p-5 mt-5 w-[50%] mx-auto rounded-lg shadow-lg">
      <h1 className="font-bold text-white text-2xl text-center">Login</h1>

      {error && (
        <div className="bg-red-500 text-white font-semibold p-3 mt-4 text-center rounded-md">
          {error}
        </div>
      )}

      <form className="flex flex-col" onSubmit={handleLogin}>
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
              Login
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
