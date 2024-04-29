// DataScience.js

import React from 'react';
import Card from './Card';

const DataScience = () => {
  return (
  <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp" title="Top 10 High Paying Non-Coding Jobs in Data Science in 2024"/>
        </div>
        <div className="col">
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp" title="12 Real-World Data Science Examples: Power Of Data Science"/>
        </div>
        <div className="col">
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp" title="Top Product-Based Companies for Data Scientists in 2024"/>
        </div>
      </div>
  </div>
  );
};

export default DataScience;
