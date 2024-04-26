import React, { useState } from 'react';
import axios from 'axios';
import './AddUserComponent.css';

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
    <div className='text-end m-2'>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add User</button>

      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add User</h5>
                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                  </div>
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
                  </div>
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} />
                  </div>
                  <button type="submit" className="btn btn-primary">Add User</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUserComponent;
