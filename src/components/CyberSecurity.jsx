// CyberSecurity.js

import React from 'react';
import Card from './Card';

const CyberSecurity = () => {
  return (
    <div className="container">
       <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp" title="Non-Coding Jobs in Cybersecurity: A Comprehensive Guide"/>
        </div>
        <div className="col">
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp" title="What Is Hacking? Types of Hacking & More" />
        </div>
        <div className="col">
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp" title="The Ultimate Cybersecurity Roadmap for Beginners" />
        </div>
      </div>
    </div>
  )
}

export default CyberSecurity;
