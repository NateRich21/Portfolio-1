import React from 'react';
import { Link } from 'react-router-dom';

import '../../../Styles/CustomNavBar.css';
import Logo from'../../Resources/Logo';
class CustomNavBar extends React.Component {


  render() {
    return (
      <div className="CustomNavBar-grid-wrapper">
            <div className="brand-container"><Logo /></div>
            <div className="link-container">
              <Link to="/about">About</Link>
            </div>
            <div className="link-container">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="link-container">
              <Link to="/projects">Projects</Link>
            </div>
            <div className="link-container">
              <Link to="/tech" id='last-nav-item-Link'>Technologies</Link>
            </div>
      </div>
    );
  }
}

export default CustomNavBar;