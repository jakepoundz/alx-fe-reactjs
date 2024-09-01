import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, Outlet } from 'react-router-dom'; // Import BrowserRouter
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  // Simulate login logic
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  const ProtectedRoute = ({ isAuthenticated }) => {
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      return <Navigate to="/login" replace />; 
    }
    return <Outlet />;
  };
  return (
    <BrowserRouter> {/* Wrap the entire app with BrowserRouter */}
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={handleLogin}>Login</button></li> {/* Example login button */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/profile" element={<Profile />}>
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Route>
          <Route path="/blog/:postId" element={<BlogPost />} /> {/* Dynamic Route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;