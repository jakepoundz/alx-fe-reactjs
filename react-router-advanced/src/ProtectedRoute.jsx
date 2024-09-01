import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />; 
  }
  return <Outlet />;
};
export default ProtectedRoute;