import React from 'react';

const UserDetailsPopup = ({ user, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{user.name}</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        <p>Company: {user.company.name}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserDetailsPopup;
