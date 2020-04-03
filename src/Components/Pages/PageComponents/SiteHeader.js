import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import '../../../Styles/SiteHeader.css';

class SiteHeader extends React.Component {

	configureButton = () => {
		if (this.props.currentHeader.buttonText) {
			return (
				<div className="SiteHeader-btn-container">
					<Link to={this.props.currentHeader.buttonLinkPath}>
						<Button variant="primary" size="lg">
							{this.props.currentHeader.buttonText}
						</Button>
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

	configureIcon = () => {
		if (this.props.currentHeader.iconSrc) {
			return(
				<div className="SiteHeader-icon-container">
					<a href="https://www.linkedin.com/in/nathan-richardson-214037156/?trk=profile-badge-cta">
						<img src={this.props.currentHeader.iconSrc}/>
						<img
							className="img-top"
							src={this.props.currentHeader.iconSrcAlt} />
					</a> 
				</div>
			)
		}
	}

	render() {
		return(
			<div className='SiteHeader-grid-wrapper'>
					<div className='SiteHeader-flex-container'>
						<div className="SiteHeader-text-container"
							style={{ 
								textAlign: this.props.currentHeader.imgSrc ? 
									"left" : "center",
								gridColumn: this.props.currentHeader.imgSrc ?
									"2" : "2/4",
								marginTop: this.props.currentHeader.imgSrc ?
									"0px" : "20px",
								padding: this.props.currentHeader.imgSrc ? "1em 3em 1em 1em" : "1em"
							}}>
							<h2 className="header-title">
								{this.props.currentHeader.headerTitle}
							</h2>
							<h4 className="header-subtitle">
								{this.props.currentHeader.subText}
							</h4>
							{this.configureButton()}
							{this.configureIcon()}
						</div>
						{this.configureImage()}
					</div>
			</div>
		)
	}
}

export default SiteHeader;
