import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';

const DeleteBook = ({ book, onDelete }) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: async () => {
      const isConfirmed = window.confirm(`Are you sure you want to delete the book ${book.title}?`);
      if (isConfirmed) {
        try {
          await axios.delete(`https://662e11e8a7dda1fa378bf577.mockapi.io/api/v1/books/${book.id}`);
          console.log(`Book ${book.title} deleted successfully`);
          alert('Book deleted successfully!');
          onDelete(book.id); // Pass the Book id to the parent component for removal
        } catch (error) {
          console.error('Error deleting Book:', error);
          alert('Error deleting Book. Please try again.');
        }
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <button type="submit" className="btn btn-danger btn-sm">Delete the Book</button>
    </form>
  );
};

export default DeleteBook;
