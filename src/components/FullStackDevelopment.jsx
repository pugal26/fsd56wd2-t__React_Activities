// FullStackDevelopment.js

import React from 'react';
import Card from './Card';

const FullStackDevelopment = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-768x402.webp" className='responsive' title="How Long Would It Take to Be a Full Stack Developer?" />
        </div>
        <div className="col">
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp" title="7 Best Full-Stack Development Online Courses [2024]" />
        </div>
        <div className="col">
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2021/05/react-768x402.jpg" title="6 Essential Prerequisites For Learning ReactJS" />
        </div>
      </div>
    </div>
  );
}

export default FullStackDevelopment;
