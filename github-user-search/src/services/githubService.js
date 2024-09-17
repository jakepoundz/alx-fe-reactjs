import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL || 'https://api.github.com';

const githubService = {
  async fetchUserData(username) {
    try {
      const response = await axios.get(`${baseUrl}/users/${jakepoundz}`);
      return response.data;
    } catch (error) {
      // Handle errors gracefully (e.g., log the error, throw a custom error)
      console.error('Error fetching user data:', error);
      throw error; // Re-throw to be caught in the component
    }
  },
};
export default githubService;

