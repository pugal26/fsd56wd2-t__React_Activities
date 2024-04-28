import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AddUserComponent.css';

const AddUserComponent = () => {
  // State variables for form inputs and modal visibility
  const [showModal, setShowModal] = useState(false);

  const initialValues = {
    title: '',
    author: '',
    isbnNumber: '',
    publicationDate: '',
    authorBirthDate: '',
    authorShortBio: '',
    bookImg: ''
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbnNumber: Yup.string().required('ISBN Number is required'),
    publicationDate: Yup.string().required('Publication Date is required'),
    authorBirthDate: Yup.string().required('Author Birth Date is required'),
    authorShortBio: Yup.string().required('Author Short Bio is required'),
    bookImg: Yup.string().required('Book Image is required')
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios.post('https://662e11e8a7dda1fa378bf577.mockapi.io/api/v1/books', values)
      .then(response => {
        console.log('Book added successfully: ', response.data);
        alert('Book added successfully!');
        resetForm(initialValues); // Clear form values
        setShowModal(false); // Close the modal after adding book
      })
      .catch(error => {
        console.error('Error adding book: ', error);
        alert('Error adding book. Please try again.');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='text-end m-3'>
      <h5>Click Below to Add a New Book</h5>
      <button className="btn btn-success" onClick={() => setShowModal(true)}>Click here</button>

      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Book</h5>
                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {formik => (
                    <Form>
                      <div className="form-group mb-3">
                        <Field type="text" className="form-control" placeholder="Title" name="title" />
                        <ErrorMessage name="title" component="div" className="error" />
                      </div>
                      <div className="form-group mb-3">
                        <Field type="text" className="form-control" placeholder="Author" name="author" />
                        <ErrorMessage name="author" component="div" className="error" />
                      </div>
                      <div className="form-group mb-3">
                        <Field type="text" className="form-control" placeholder="ISBN Number" name="isbnNumber" />
                        <ErrorMessage name="isbnNumber" component="div" className="error" />
                      </div>
                      <div className="form-group mb-3">
                        <Field type="text" className="form-control" placeholder="Publication Date" name="publicationDate" />
                        <ErrorMessage name="publicationDate" component="div" className="error" />
                      </div>
                      <div className="form-group mb-3">
                        <Field type="text" className="form-control" placeholder="Author's Birth Date" name="authorBirthDate" />
                        <ErrorMessage name="authorBirthDate" component="div" className="error" />
                      </div>
                      <div className="form-group mb-3">
                        <Field type="text" className="form-control" placeholder="Author's Short Bio" name="authorShortBio" />
                        <ErrorMessage name="authorShortBio" component="div" className="error" />
                      </div>
                      <div className="form-group mb-3">
                        <Field type="text" className="form-control" placeholder="Book Image URL" name="bookImg" />
                        <ErrorMessage name="bookImg" component="div" className="error" />
                      </div>
                      <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>Add Book</button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUserComponent;