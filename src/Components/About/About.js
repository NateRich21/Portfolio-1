import React from 'react';

class About extends React.Component {

    componentDidMount() {
        this.props.updatePath('/about')
    }

    render() {
        return(
            <h1>About</h1>
        )
    }

}

export default About;