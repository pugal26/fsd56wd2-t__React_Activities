import React, { useState } from 'react';
import axios from 'axios';

const UpdateUserComponent = ({ user, onUpdate }) => {
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const updatedUser = { ...user, name, username };
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, updatedUser);
      onUpdate(response.data); // Update the user in parent component state
      alert('User updated successfully!');
      // onClose(); // Close the pop-up after updating
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Error updating user. Please try again.');
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Update User</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <button type="submit">Update User</button>
        </form>
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
};
export default UpdateUserComponent;
