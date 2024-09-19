import axios from 'axios';

export const fetchAdvancedUserData = async (username, location, minRepos, page = 1) => {
  let query = `${username ? `user:${username}` : ''}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};
export default githubService;

