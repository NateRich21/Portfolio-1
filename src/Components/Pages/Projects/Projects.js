import React from 'react';  

class Projects extends React.Component {

    componentDidMount() {
        this.props.updatePath('/projects')
        this.props.updateHeaderContent('/projects');
    }
    render() {   
        return (<h1>Projects</h1>)
    };
}

export default Projects;