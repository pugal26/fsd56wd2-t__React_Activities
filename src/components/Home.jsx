// Home.js

import React from 'react';
import FullStackDevelopment from './FullStackDevelopment';
import Datascience from './Datascience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';

const Home = () => {
  return (
    <div>
      <h2 className='text-center'>Full Stack Development</h2>
      <FullStackDevelopment />
      <hr />
      
      <h2 className='text-center'>Data Science</h2>
      <Datascience />
      <hr />
      
      <h2 className='text-center'>Cyber Security</h2>
      <CyberSecurity />
      <hr />
      
      <h2 className='text-center'>Career</h2>
      <Career />
    </div>
  );
}

export default Home;
