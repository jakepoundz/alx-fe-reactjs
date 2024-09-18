import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL || 'https://api.github.com';
const githubService = {
  async fetchUserData(username, location, minRepos) {
    try {
      let queryParams = `?q=${username}`;
      if (location) {
        queryParams += `+location:${location}`;
      }
      if (minRepos) {
        queryParams += `+repos:>=${minRepos}`;
      }
      const response = await axios.get(`${baseUrl}/search/users${queryParams}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; 
    }
  },
};
export default githubService;

