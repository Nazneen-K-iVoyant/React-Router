import React from 'react';
import { useAuth } from './Auth'; // Importing useAuth from Auth.tsx

const Profile = () => {
  const auth = useAuth(); // Using the useAuth hook to access authentication context
  const handleLogout = () => {
    auth.logout();
    // Navigate to the home page or any other appropriate route after logout
  };

  return (
    <div>
      Welcome {auth.user}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
