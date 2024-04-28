// GetBook.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookDetailsPopup from './BookDetailsPopup';
import DeleteBook from './DeleteBook';
import EditBookModal from './EditBookModal';

const GetBook = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

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
    setEditingBook(item);
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
    setEditingBook(null);
  };

  // Rendering book data list, book details popup, and edit book modal
  return (
    <div className="container mb-5">
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
                  <DeleteBook book={item} onDelete={handleDelete} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showPopup && <BookDetailsPopup book={selectedItem} onClose={handleClosePopup} />}
      {showEditModal && <EditBookModal book={editingBook} onClose={handleCloseEditModal} showEditModal={showEditModal}/>}
    </div>
  );
};

export default GetBook;
