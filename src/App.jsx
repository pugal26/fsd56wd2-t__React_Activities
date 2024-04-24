// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/Datascience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="selected">All</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/full-stack-development" className="nav-link" activeClassName="selected">Full Stack Development</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/data-science" className="nav-link" activeClassName="selected">Data Science</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cyber-security" className="nav-link" activeClassName="selected">Cyber Security</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/career" className="nav-link" activeClassName="selected">Career</NavLink>
            </li>
          </ul>
        </nav>

        <hr className="my-5" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;