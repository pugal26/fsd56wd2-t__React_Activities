// Card.jsx

import React from 'react';

const Card = ({ imageSrc, title }) => {
  return (
    <div className="card mx-5 my-3">
      <img src={imageSrc} alt={title} className="card-img-top img-fluid" style={{height: '200px', objectFit: 'cover'}} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
}

export default Card;
