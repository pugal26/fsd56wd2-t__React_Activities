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
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2022/06/Your-paragraph-text-2048x1024.png" title="Data Science vs Data Analytics | Best Career Choice in 2024"/>
        </div>
        <div className="col">
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png" title="Roles and Responsibilities of a Data Scientist"/>
        </div>
      </div>
  </div>
  );
};

export default DataScience;
