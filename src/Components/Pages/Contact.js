import React from 'react';
import ContactForm from '../VisualComponents/ContactForm/ContactForm';

class Contact extends React.Component {

    componentDidMount() {
        this.props.updatePath('/contact')
        this.props.updateHeaderContent('/contact');
    }

    render() {
        return(
            <div>
                <ContactForm />
            </div>
        )
    }

}

export default Contact;