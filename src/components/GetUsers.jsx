import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetailsPopup from './UserDetailsPopup';
import EditUserModal from './EditUserModal';
import DeleteUserComponent from './DeleteUserComponent';

const GetUsersComponent = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://662e11e8a7dda1fa378bf577.mockapi.io/api/v1/books');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Calling fetchData function on component mount
  }, []); // Running useEffect hook only on component mount

  const handleClick = item => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleEdit = item => {
    setEditingUser(item);
    setShowEditModal(true);
  };

  const handleDelete = bookId => {
    // Filter out the deleted book from the data array
    setData(prevData => prevData.filter(book => book.id !== bookId));
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditingUser(null);
  };

  // Rendering book data list, book details popup, and edit book modal
  return (
    <div className="container mb-5 bg-light">
      <h2 className="mt-5 mb-4">Book Data</h2>
      <ul className="list-group">
        {data.map(item => (
          <li key={item.id} className="list-group-item bg-light">
            <div className="d-flex align-items-center justify-content-between bg-light">
              <h5>{item.title}</h5>
              <div>
                <button className="btn btn-secondary" onClick={() => handleClick(item)}>View</button>
                <button className="btn btn-warning m-2" onClick={() => handleEdit(item)}>Edit</button>
                <DeleteUserComponent className="delete-btn" user={item} onDelete={handleDelete} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      {showPopup && <UserDetailsPopup book={selectedItem} onClose={handleClosePopup} />}
      {showEditModal && <EditUserModal user={editingUser} onClose={handleCloseEditModal} showEditModal={showEditModal}/>}
    </div>
  );
};

export default GetUsersComponent;
