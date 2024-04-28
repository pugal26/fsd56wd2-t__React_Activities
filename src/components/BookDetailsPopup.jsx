import React from 'react';

const BookDetailsPopup = ({ book, onClose }) => {
  if (!book) return null; // Add a check to handle when book object is undefined

  return (
    <div className="popup-overlay bg-dark">
      <div className="popup-content bg-light p-4 rounded">
        <span className="close text-light" onClick={onClose}>&times;</span>
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <img src={book.bookImg} alt={book.title} className="img-fluid rounded" />
          </div>
          <div className="col-md-8">
            <h2 className="text-dark">{book.title}</h2>
            <p className="text-dark"><strong>Author:</strong> {book.author}</p>
            <p className="text-dark"><strong>ISBN:</strong> {book.isbnNumber}</p>
            <p className="text-dark"><strong>Publication Date:</strong> {book.publicationDate}</p>
            <p className="text-dark"><strong>Author's Birth Date:</strong> {book.authorBirthDate}</p>
            <p className="text-dark"><strong>Author's Short Bio:</strong> {book.authorShortBio}</p>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPopup;
