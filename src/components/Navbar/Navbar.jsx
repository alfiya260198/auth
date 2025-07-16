import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="nav-left">
        <h1 className="logo">React Auth</h1>
      </div>
      <div className="nav-links">
        {!token ? (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        ) : (
          <>
            <Link to="/profile" className="nav-link">Profile</Link>
            <Link to="/change-password" className="nav-link">Change Password</Link>
            <button onClick={handleLogout} className="nav-link logout-btn">Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
