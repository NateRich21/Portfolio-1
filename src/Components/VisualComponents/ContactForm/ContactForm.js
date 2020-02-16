import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

import '../../../Styles/ContactForm.css';



class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fname: '',
			lname: '',
			email: '',
			message: '',
			error: null,
			mailSent: false
		}

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit = ( event ) => {
		event.preventDefault();
		console.log(this.state);
		this.setState({ fname: '',lname: '', email: '', message: '' })
	  }

	render() {
		return (
			<div className="ContactForm">
				<p>Contact Me</p>
				<div>
					<form action="#" >
						<label>First Name</label>
						<input type="text" id="fname" name="firstname" placeholder="Your name.."
							value={this.state.fname}
							onChange={e => this.setState({ fname: e.target.value })}
						/>

						<label>Last Name</label>
						<input type="text" id="lname" name="lastname" placeholder="Your last name.."
							value={this.state.lname}
							onChange={e => this.setState({ lname: e.target.value })}
						/>


						<label>Email</label>
						<input type="email" id="email" name="email" placeholder="Your email"
							value={this.state.email}
							onChange={e => this.setState({ email: e.target.value })}
						/>


						<label>Message</label>
						<textarea id="message" name="message" placeholder="Write something.."
							onChange={e => this.setState({ message: e.target.value })}
							value={this.state.message}
						>	
						</textarea>
						<input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
					</form >
				</div>
			</div>
		);
	}
};

	export default ContactForm;