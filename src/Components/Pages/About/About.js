import React from 'react';
import { MDBBtn } from 'mdbreact'
import { Link } from 'react-router-dom'

import './About.css'

class About extends React.Component {

    componentDidMount() {
        this.props.updatePath('/about');
        this.props.updateHeaderContent('/about');
    }

    render() {
        return(
            
            <div className='about-page-container'>
                <div className='about-page'>
                    <h2>Who I am</h2>
                    <p className='content-sm'> I'm Nate Richardson, and I'm passionate about learning and creating</p>
                    <p className='content-sm'>By day, I work in IT support. In the evenings, I work to become the best developer I can be.</p>
                    <h2>Why I want to develop</h2>
                    <p className="content-sm">As someone with a great deal of passion around creativity, I love that programming allows me to take nearly any idea I have and make it a reality.</p>
                    <p className='content-sm'>In addition to what it allows me to accomplish, I enjoy the process as a whole. I love problem solving, so of course I love to code. </p>
                    <h2 className='content-lg'>What I know</h2>
                    <p className='content-sm'>My primary focus has been web development. Although I have also started building native VR apps for android devices.</p>
                    <p className='content-sm'>Feel free to click below and get a feel for the technologies I have a experience with.</p>
                    <div className='button-row'>
                        <Link to='/tech'>
                            <MDBBtn color='info'>
                                Technologies
                            </MDBBtn>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default About;