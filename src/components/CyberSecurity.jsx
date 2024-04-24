// CyberSecurity.js

import React from 'react';
import Card from './Card';

const CyberSecurity = () => {
  return (
    <div>
       <div className="row">
        <div className="col-md-4 col-sm-6">
          <Card imageSrc="../src/assets/CS_Card1.webp" title="Cybersecurity Vs Ethical Hacking: Top 10 Differences"/>
        </div>
        <div className="col-md-4 col-sm-6">
          <Card imageSrc="../src/assets/CS_Card2.webp" title="8 Different Types of Cybersecurity and Threats Involved" />
        </div>
        <div className="col-md-4 col-sm-6">
          <Card imageSrc="../src/assets/CS_Card3.webp" title="The Ultimate Cybersecurity Roadmap for Beginners" />
        </div>
      </div>
    </div>
  )
}

export default CyberSecurity;
