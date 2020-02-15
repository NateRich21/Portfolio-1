import React from 'react';
import { MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom'

import './SiteHeader.css'

class SiteHeader extends React.Component {

	configureButton = () => {
		if (this.props.currentHeader.buttonText) {
			return (
				<div className="header-button-container">
					<Link to={this.props.currentHeader.buttonLinkPath}>
						<MDBBtn 
							color="info" 
							size="lg" >
							{this.props.currentHeader.buttonText}
						</MDBBtn>
					</Link>
				</div>
			)
		}
	}

	configureImage = () => {
		if (this.props.currentHeader.imgSrc) {
			return(
				<div className="header-image">
					<div className="img-figure">
						<img src={this.props.currentHeader.imgSrc}/>
					</div>  
				</div>
			)
		}
	}

		render() {
			return(
				<div className='my-header'>
					<div className="header-container">
						<div 
							className="header-content"
							style={{textAlign: this.props.currentHeader.imgSrc ? "left" : "center"}} >
							<h2 className="header-title">
								{this.props.currentHeader.headerTitle}
							</h2>
							<h4 className="header-subtitle">
								{this.props.currentHeader.subText}
							</h4>
							{this.configureButton()}
						</div>
						{this.configureImage()}
					</div>
				</div>
			)
		}
}

export default SiteHeader;
