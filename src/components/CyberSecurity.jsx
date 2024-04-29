// CyberSecurity.js

import React from 'react';
import Card from './Card';

const CyberSecurity = () => {
  return (
    <div className="container">
       <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png" title="Cybersecurity Vs Ethical Hacking: Top 10 Differences"/>
        </div>
        <div className="col">
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png" title="8 Different Types of Cybersecurity and Threats Involved" />
        </div>
        <div className="col">
          <Card imageSrc="https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp" title="The Ultimate Cybersecurity Roadmap for Beginners" />
        </div>
      </div>
    </div>
  )
}

export default CyberSecurity;
