import React from 'react';
import { MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom'

import './SiteHeader.css'

class SiteHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      path: ''
    }
  }

  render() {
    return(
      <div className='my-header'>
        <div className="header-container">
          <div className="header-content">
            <h1>Hey, I'm Nate.</h1>
            <h2>
              Web designer and developer from <br />
              St. Louis, MO. I create custom <br />
              websites to help companies to <br />
              succeed online.
            </h2>
            <div className="header-button-container">
              <Link to="/projects">
                <MDBBtn 
                  color="info" 
                  size="lg" >
                  My Projects
                </MDBBtn>
              </Link>
            </div>
          </div>
          <div className="header-image">  
            <div className="img-figure">
              <img src="" />
            </div>  
          </div>
        </div>
      </div>
    )
  }
}

export default SiteHeader;
