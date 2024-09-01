import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// Simulate useAuth (you would normally get this from a context or state management)
const useAuth = () => {
  // For this example, we're just returning a mock authentication state
  return { isAuthenticated: true }; // Replace with your actual authentication logic
};
const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth(); // Use the mock useAuth 
  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />; 
  }
  return <Outlet />;
};
export default ProtectedRoute;

