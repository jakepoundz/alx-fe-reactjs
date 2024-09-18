import React, { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'userName') {
      setUsername(value);
    } else if (name === 'location') {
      setLocation(value);
    } else if (name === 'minRepos') {
      setMinRepos(value);
    }
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setUserData([]);
    try {
      const data = await githubService.fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can\'t find the user.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="search-container">
      <h2 className="text-2xl font-bold mb-4">GitHub User Search</h2>
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <div className="input-group">
          <label htmlFor="searchTerm" className="block text-gray-700 font-bold mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="jakepoundz"
            value={username}
            onChange= {(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="input-group">
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location..."
            value={location}
            onChange= {(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="input-group">
          <label htmlFor="minRepos" className="block text-gray-700 font-bold mb-2">
            Minimum Repositories:
          </label>
          <input
            type="number"
            id="minRepos"
            name="minRepos"
            placeholder="Enter minimum repositories..."
            value={minRepos}
            onChange= {(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">
          Search
        </button>
      </form>
      {isLoading && (
        <p className="text-center text-gray-600 mt-4">Loading...</p>
      )}
      {error && (
        <p className="text-center text-red-500 mt-4">{error}</p>
      )}
      {userData && (
        <div className="results-container mt-4">
          <h3 className="text-xl font-bold mb-2">Search Results</h3>
          <ul className="list-disc">
            {userData.items.map((user) => (
              <li key={user.id} className="mb-2">
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  <img src={user.avatar_url} alt={user.login} className="inline-block w-10 h-10 rounded-full mr-2" />
                  {user.login}
                </a>
                <p className="inline-block ml-2">
                  Location: {user.location || "N/A"}
                </p>
                <p className="inline-block ml-2">
                  Repositories: {user.public_repos}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Search;