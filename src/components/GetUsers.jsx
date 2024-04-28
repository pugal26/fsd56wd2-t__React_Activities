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
    <div className="container mb-5">
     <hr />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-3">
        {data.map(item => (
          <div key={item.id} className="col">
            <div className="card">
            <img src={item.bookImg} className="card-img-top" alt={item.title} style={{ height: '400px', objectFit: 'cover' }} />
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">
                  <span style={{ fontStyle: 'italic' }}>{item.author}</span>
                </p>
                <div className="d-flex justify-content-around">
                  <button className="btn btn-info btn-sm" onClick={() => handleClick(item)}>View the Book</button>
                  <button className="btn btn-warning btn-sm" onClick={() => handleEdit(item)}>Edit the Book</button>
                  <DeleteUserComponent user={item} onDelete={handleDelete} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showPopup && <UserDetailsPopup book={selectedItem} onClose={handleClosePopup} />}
      {showEditModal && <EditUserModal user={editingUser} onClose={handleCloseEditModal} showEditModal={showEditModal}/>}
    </div>
  );
};

export default GetUsersComponent;
