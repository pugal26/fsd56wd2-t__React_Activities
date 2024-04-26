import React from 'react';

const UserDetailsPopup = ({ user, onClose }) => {
  return (
    <div className="popup-overlay bg-dark">
      <div className="popup-content bg-light p-4 rounded">
        <span className="close text-light" onClick={onClose}>&times;</span>
        <h2 className="text-dark">{user.name}</h2>
        <p className="text-dark">Username: {user.username}</p>
        <p className="text-dark">Email: {user.email}</p>
        <p className="text-dark">Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        <p className="text-dark">Company: {user.company.name}</p>
        <button className="btn btn-primary" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserDetailsPopup;
