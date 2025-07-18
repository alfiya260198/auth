import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedExpiry = localStorage.getItem('tokenExpiry');

    if (storedToken && storedExpiry) {
      const now = new Date().getTime();
      if (now > parseInt(storedExpiry)) {
        logout();
      } else {
        setToken(storedToken);
        const remainingTime = parseInt(storedExpiry) - now;
        setTimeout(() => logout(), remainingTime);
      }
    }
  }, []);

  const login = (newToken) => {
    const expiryTime = new Date().getTime() + 5 * 60 * 1000;
    localStorage.setItem('token', newToken);
    localStorage.setItem('tokenExpiry', expiryTime.toString());
    setToken(newToken);
    setTimeout(() => logout(), 5 * 60 * 1000);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiry');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
