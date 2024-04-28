import React from 'react';

const UserDetailsPopup = ({ book, onClose }) => {
  if (!book) return null; // Add a check to handle when book object is undefined

  return (
    <div className="popup-overlay bg-dark">
      <div className="popup-content bg-light p-4 rounded">
        <span className="close text-light" onClick={onClose}>&times;</span>
        <h2 className="text-dark">{book.title}</h2>
        <p className="text-dark">Author: {book.author}</p>
        <p className="text-dark">ISBN: {book.isbnNumber}</p>
        <p className="text-dark">Publication Date: {book.publicationDate}</p>
        <p className="text-dark">Author's Birth Date: {book.authorBirthDate}</p>
        <p className="text-dark">Author Short Bio: {book.authorShortBio}</p>
        <button className="btn btn-primary" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserDetailsPopup;
