// src/components/UserProfile.jsx 
import { useContext } from 'react';
import UserContext from './UserContext';

  function UserProfile() {
    const userData = useContext(UserContext);
    return <UserInfo userData={userData} />; 
  }
  
  export default UserProfile;