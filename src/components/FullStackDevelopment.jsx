// FullStackDevelopment.js

import React from 'react';
import Card from './Card';

const FullStackDevelopment = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <Card imageSrc="../src/assets/FSD_Card1.webp" title="How Long Would It Take to Be a Full Stack Developer?" />
        </div>
        <div className="col-md-4 col-sm-6">
          <Card imageSrc="../src/assets/FSD_Card2.webp" title="7 Best Full-Stack Development Online Courses [2024]" />
        </div>
        <div className="col-md-4 col-sm-6">
          <Card imageSrc="../src/assets/FSD_Card3.jpg" title="6 Essential Prerequisites For Learning ReactJS" />
        </div>
      </div>
    </div>
  );
}

export default FullStackDevelopment;
