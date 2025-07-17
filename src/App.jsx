import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthContext';
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/Login/LoginForm';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Login/ChangePassword.jsx';
import Signup from './components/Signup/Signup.jsx';

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Signup />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

          <Route path="*" element={<Navigate to="/profile" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
