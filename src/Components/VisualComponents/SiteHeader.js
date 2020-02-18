import React from 'react';
import { MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom'

import '../../Styles/SiteHeader.css';

class SiteHeader extends React.Component {

	configureButton = () => {
		if (this.props.currentHeader.buttonText) {
			return (
				<div className="SiteHeader-btn-container">
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
				<div className="SiteHeader-img-container">
						<img src={this.props.currentHeader.imgSrc}/> 
				</div>
			)
		}
	}

		render() {
			return(
				<div className='SiteHeader-grid-wrapper'>
						<div className="SiteHeader-text-container"
							style={{ 
								textAlign: this.props.currentHeader.imgSrc ? 
									"left" : "center",
								gridColumn: this.props.currentHeader.imgSrc ?
									"2" : "2/4",
								marginTop: this.props.currentHeader.imgSrc ?
									"0px" : "20px"
							}}>
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
			)
		}
}

export default SiteHeader;
