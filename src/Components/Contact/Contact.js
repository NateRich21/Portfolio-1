import React from 'react';

class Contact extends React.Component {

    componentDidMount() {
        this.props.updatePath('/contact')
    }

    render() {
        return(
            <h1>Contact</h1>
        )
    }

}

export default Contact;