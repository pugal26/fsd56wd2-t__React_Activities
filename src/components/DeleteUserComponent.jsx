// DeleteUserComponent.js

import React from 'react';
import axios from 'axios';

const DeleteUserComponent = ({ user, onDelete }) => {
   // Function to handle user deletion
  const handleDelete = () => {
    const isConfirmed = window.confirm(`Are you sure you want to delete ${user.name}?`);
    if (isConfirmed) {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
        .then(response => {
          console.log(`User ${user.name} deleted successfully`, response.data);
          alert('User deleted successfully!');
          onDelete(user.id); // Pass the user id to the parent component for removal
        })
        .catch(error => {
          console.error('Error deleting user:', error);
          alert('Error deleting user. Please try again.');
        });
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
  );
};

export default DeleteUserComponent;
