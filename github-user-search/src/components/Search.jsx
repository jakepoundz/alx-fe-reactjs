import React, { useState } from 'react';
import githubService from '../services/githubService'; // Import your API service
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const data = await githubService.fetchUserData(jakepoundz);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="jakepoundz"
          value={searchTerm}
          onChange={handleChange}
          className="search-input" 
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt={userData.login} className="user-avatar" />
          <h2>{userData.name || userData.login}</h2>
          <p>Username: {userData.login}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};
export default Search;