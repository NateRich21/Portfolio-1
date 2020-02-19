import React from 'react';
import { Card, Button } from 'react-bootstrap'

import '../../Styles/Projects.css'


class Projects extends React.Component {

    componentDidMount() {
        this.props.updatePath('/projects')
        this.props.updateHeaderContent('/projects');
    }
    render() {   
        return (
            <div className="ProjectsPage-wrapper">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.imgur.com/WtHtVxm.png" />
                    <Card.Body>
                        <Card.Title>Portfolio</Card.Title>
                        <Card.Text>
                            The site you're at right now! You can click the button below to check out the project on GitHub. More features are planned and will be deployed shortly.
                        </Card.Text>
                        <Button variant="primary">
                            <a href="https://github.com/NateRich21/Portfolio-1">View Code on GitHub</a>    
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.imgur.com/beW5CMm.png" />
                    <Card.Body>
                        <Card.Title>Jammming</Card.Title>
                        <Card.Text>
                            A web app that utilizes Spotify's API to allow users to search music, create playlists and then save them to their Spotify accounts.
                        </Card.Text>
                        <Button variant="primary">
                            <a href="https://jamming-5723f.firebaseapp.com/">Go to project</a>
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.imgur.com/PJuVrMp.png" />
                    <Card.Body>
                        <Card.Title>Blog Demo</Card.Title>
                        <Card.Text>
                            A demo that allows users to create posts and add them to the blog's post list. All info persists between sessions as the content is stored, retrieved and inserted into a MySQL database.
                        </Card.Text>
                        <Button variant="primary">
                            <a href="https://github.com/NateRich21/routing-practice">View Code on GitHub</a>
                        </Button>
                    </Card.Body>
                </Card> 
            </div>
        )
    };
}

export default Projects;