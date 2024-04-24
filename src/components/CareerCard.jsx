// CareerCard.js

import React from 'react';

const CareerCard = ({ title, description, imageSrc, button1Text, button2Text }) => {
  return (
    <div className="card mb-3">
      <img src={imageSrc} className="card-img-top" alt="Career Thumbnail" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5><br />
        <div className="btn-group" role="group" aria-label="Career Card Buttons">
          <p className='text-muted'>Available in</p>
          <button className="btn btn-sm btn-light mx-1">{button1Text}</button>
          <button className="btn btn-sm btn-light">{button2Text}</button>
        </div><br />
        <br />
        <p className="card-text">EMI Options Available<br />
        Placement Guidance<br />
        1:1 Mentor Doubt Clearing Sessions<br />
        </p>
        <hr />
        <div className="d-flex justify-content-between mt-2">
          <button className="btn btn-primary">Known More</button>
          <button className="btn btn-secondary">Syllabus</button>
        </div>
      </div>
    </div>
  );
}

export default CareerCard;
