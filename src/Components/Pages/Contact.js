import React from 'react';

import '../../Styles/Contact.css'

class Contact extends React.Component {

    componentDidMount() {
        this.props.updatePath('/contact')
        this.props.updateHeaderContent('/contact');
    }

    render() {
        return(
            <div className="ContactPage-wrapper">
                <div className="contact-info-container">
                    <h2>My Email Address</h2>
                    <hr />
                    <p>nathanjrichardson3@gmail.com</p>
                </div>
                <div className="contact-info-container">
                    <h2>My Phone Number</h2>
                    <hr />
                    <p>314-326-1044</p>
                </div>
                <div className="contact-info-rider">
                    <h6>You can expect to hear back from me within 24 hours</h6>
                </div>
                
            </div>
        )
    }

}

export default Contact;