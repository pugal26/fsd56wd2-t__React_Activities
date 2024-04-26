import React, { useState } from 'react';
import axios from 'axios';

const EditUserModal = ({ user, onClose, showEditModal }) => { // Receive showEditModal prop
  const [editedUser, setEditedUser] = useState({ ...user });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setEditedUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${editedUser.id}`, editedUser);
      console.log('User updated successfully');
      alert('User updated successfully!');
      onClose(); // Closing edit user modal
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      {showEditModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit User</h5>
                <button type="button" className="close" onClick={onClose} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {showAlert && (
                  <div className="alert alert-success" role="alert">
                    User updated successfully!
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-2">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={editedUser.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={editedUser.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={editedUser.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="address">Address:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={getFullAddress(editedUser.address)}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="company">Company:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      name="company"
                      value={editedUser.company ? editedUser.company.name : ''}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary m-2">Update</button>
                  <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Function to get full address string from address object
const getFullAddress = (address) => {
    if (!address) return ''; // Return empty string if address is null or undefined
    const { street, suite, city, zipcode } = address;
    return `${street}, ${suite}, ${city}, ${zipcode}`;
  };

export default EditUserModal;
