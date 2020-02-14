import React from 'react';
import { MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom'

import './SiteHeader.css'

class SiteHeader extends React.Component {

	render() {
		return(
			<div className='my-header'>
				<div className="header-container">
					<div className="header-content">
						<h1 className="header-title">
							{this.props.currentHeader.headerTitle}
						</h1>
						<h2 className="header-subtitle">
							{this.props.currentHeader.subText}
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
