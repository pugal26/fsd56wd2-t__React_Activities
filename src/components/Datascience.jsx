// DataScience.js

import React from 'react';
import Card from './Card';

const DataScience = () => {
  return (
  <div>
    <div className="row">
        <div className="col-md-4 col-sm-6">
          <Card imageSrc="../src/assets/DS_Card1.webp" title="Top 10 High Paying Non-Coding Jobs in Data Science in 2024"/>
        </div>
        <div className="col-md-4 col-sm-6">
          <Card imageSrc="../src/assets/DS_Card2.webp" title="Data Science vs Data Analytics | Best Career Choice in 2024"/>
        </div>
        <div className="col-md-4 col-sm-6">
          <Card imageSrc="../src/assets/DS_Card3.webp" title="Roles and Responsibilities of a Data Scientist"/>
        </div>
      </div>
  </div>
  );
};

export default DataScience;
