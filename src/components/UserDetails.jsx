import React, { useState } from 'react';
import UpdateUserComponent from './UpdateUser';

const UserDetails = ({ user }) => {
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);

  const handleUpdate = updatedUser => {
    // Handle the updated user data (e.g., update state)
    console.log('Updated user:', updatedUser);
    // Here you can update the user data in the parent component's state
  };

  // Add null check for user object
  if (!user) {
    return <div>User data not available</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      {/* Display other user details */}
      <button onClick={() => setShowUpdatePopup(true)}>Update User</button>
      {showUpdatePopup && (
        <UpdateUserComponent user={user} onUpdate={handleUpdate} />
      )}
    </div>
  );
};

export default UserDetails;
