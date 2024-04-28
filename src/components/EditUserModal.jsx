import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const EditUserModal = ({ user, onClose, showEditModal }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbnNumber: Yup.string().required('ISBN Number is required'),
    publicationDate: Yup.string().required('Publication Date is required'),
    authorBirthDate: Yup.string().required('Author Birth Date is required'),
    authorShortBio: Yup.string().required('Author Short Bio is required'),
    bookImg: Yup.string().required('Book Image URL is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: user.title,
      author: user.author,
      isbnNumber: user.isbnNumber,
      publicationDate: user.publicationDate,
      authorBirthDate: user.authorBirthDate,
      authorShortBio: user.authorShortBio,
      bookImg: user.bookImg,
      
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await axios.put(`https://662e11e8a7dda1fa378bf577.mockapi.io/api/v1/books/${user.id}`, values)
        .then(response => {
        console.log('User updated successfully', response.data);
        alert('Book updated successfully!');
        onClose();
      })
      } catch (error) {
        console.error('Error updating book:', error);
      }
      setSubmitting(false);
    },
  });

  return (
    <div>
      {showEditModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Book</h5>
                <button type="button" className="close" onClick={onClose} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group mb-2">
                    <label htmlFor="title">Title:</label>
                    <input
                      type="text"
                      className={`form-control ${formik.touched.title && formik.errors.title ? 'is-invalid' : ''}`}
                      id="title"
                      name="title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.title && formik.errors.title && (
                      <div className="invalid-feedback">{formik.errors.title}</div>
                    )}
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="author">Author:</label>
                    <input
                      type="text"
                      className={`form-control ${formik.touched.author && formik.errors.author ? 'is-invalid' : ''}`}
                      id="author"
                      name="author"
                      value={formik.values.author}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.author && formik.errors.author && (
                      <div className="invalid-feedback">{formik.errors.author}</div>
                    )}
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="isbnNumber">ISBN Number:</label>
                    <input
                      type="text"
                      className={`form-control ${formik.touched.isbnNumber && formik.errors.isbnNumber ? 'is-invalid' : ''}`}
                      id="isbnNumber"
                      name="isbnNumber"
                      value={formik.values.isbnNumber}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.isbnNumber && formik.errors.isbnNumber && (
                      <div className="invalid-feedback">{formik.errors.isbnNumber}</div>
                    )}
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="publicationDate">Publication Date:</label>
                    <input
                      type="text"
                      className={`form-control ${formik.touched.publicationDate && formik.errors.publicationDate ? 'is-invalid' : ''}`}
                      id="publicationDate"
                      name="publicationDate"
                      value={formik.values.publicationDate}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.publicationDate && formik.errors.publicationDate && (
                      <div className="invalid-feedback">{formik.errors.publicationDate}</div>
                    )}
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="authorBirthDate">Author's Birth Date</label>
                    <input
                      type="text"
                      className={`form-control ${formik.touched.authorBirthDate && formik.errors.authorBirthDate ? 'is-invalid' : ''}`}
                      id="authorBirthDate"
                      name="authorBirthDate"
                      value={formik.values.authorBirthDate}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.authorBirthDate && formik.errors.authorBirthDate && (
                      <div className="invalid-feedback">{formik.errors.authorBirthDate}</div>
                    )}
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="authorShortBio">Author's Short Bio</label>
                    <textarea
                      type="text"
                      className={`form-control ${formik.touched.authorShortBio && formik.errors.authorShortBio ? 'is-invalid' : ''}`}
                      id="authorShortBio"
                      name="authorShortBio"
                      value={formik.values.authorShortBio}
                      onChange={formik.handleChange}
                      rows='4'
                      cols='50'
                    />
                    {formik.touched.authorShortBio && formik.errors.authorShortBio && (
                      <div className="invalid-feedback">{formik.errors.authorShortBio}</div>
                    )}
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="bookImg">Book Image URL</label>
                    <input
                      type="text"
                      className={`form-control ${formik.touched.bookImg && formik.errors.bookImg ? 'is-invalid' : ''}`}
                      id="bookImg"
                      name="bookImg"
                      value={formik.values.bookImg}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.bookImg && formik.errors.bookImg && (
                      <div className="invalid-feedback">{formik.errors.bookImg}</div>
                    )}
                  </div>
                  {/* Repeat similar structure for other form fields */}
                  <button type="submit" className="btn btn-primary m-2" disabled={formik.isSubmitting}>
                    Update
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={onClose} disabled={formik.isSubmitting}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditUserModal;