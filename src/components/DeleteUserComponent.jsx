import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';

const DeleteUserComponent = ({ user, onDelete }) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: async () => {
      const isConfirmed = window.confirm(`Are you sure you want to delete the book${user.title}?`);
      if (isConfirmed) {
        try {
          await axios.delete(`https://662e11e8a7dda1fa378bf577.mockapi.io/api/v1/books/${user.id}`)
          .then(response => {
          console.log(`User ${user.title} deleted successfully`, response.data);
          alert('Book deleted successfully!');
          onDelete(user.id); // Pass the user id to the parent component for removal
        })
        } catch (error) {
          console.error('Error deleting user:', error);
          alert('Error deleting user. Please try again.');
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

export default DeleteUserComponent;