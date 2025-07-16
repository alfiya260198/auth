import React from 'react';
import { useAuth } from '../AuthContext';

function Profile() {
  const { logout } = useAuth();

  return (
    <div className="profile-container">
      <h2>Welcome to Your Profile</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
