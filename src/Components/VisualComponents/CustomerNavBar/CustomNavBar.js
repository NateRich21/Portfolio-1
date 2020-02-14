import React from 'react';
import { Link } from 'react-router-dom';

import './CustomNavBar.css';

class CustomNavBar extends React.Component {


  render() {
    return (
      <div className="site-header">
        <nav>
          <div className="navbar-container">
            <div className="brand-container">
              <Link to="/home">Nate Richardson</Link>
            </div>
    
            <div className="link-container">
              <Link to="/about">About</Link>
            </div>
            <div className="link-container">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="link-container">
              <Link to="/projects">Projects</Link>
            </div>
    
          </div>
        </nav>
      </div>
    );
  }
}

export default CustomNavBar;