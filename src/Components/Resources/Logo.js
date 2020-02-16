import React from 'react';
import { Link } from 'react-router-dom';

import '../../Styles/Logo.scss';


class Logo extends React.Component {
  render() {
    return(
      <Link to='/home' id="logo-Link" className="logo-btn">
        <span>
          <span>
            <span>Nate Richardson</span>
          </span>
        </span>
      </Link> 
    )
  }
}

export default Logo;