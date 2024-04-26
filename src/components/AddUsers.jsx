import React, { useState } from 'react';
import axios from 'axios';
import './AddUserComponent.css'; // Import CSS file for styling

const AddUserComponent = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { name, username, email, address, company };

    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(response => {
        console.log('User added successfully: ', response.data);
        alert('User added successfully!');
        setShowModal(false); // Close the modal after adding user
        setName(''); // Clear input fields
        setUsername('');
        setEmail('');
        setAddress('');
        setCompany('');


        // Optionally, update UI or fetch users again
      })
      .catch(error => {
        console.error('Error adding user: ', error);
        alert('Error adding user. Please try again.');
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Add User</h2>
      <button onClick={() => setShowModal(true)}>Add User</button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>Add User</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
              <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
              <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
              <input type="text" placeholder="address" value={address} onChange={e => setAddress(e.target.value)} />
              <input type="text" placeholder="company" value={company} onChange={e => setCompany(e.target.value)} />


              <button type="submit">Add User</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUserComponent;
