import React from 'react';
import PageTextImgItem from './PageComponents/PageTextImgItem'

import '../../Styles/About.css';

class About extends React.Component {

    componentDidMount() {
        this.props.updatePath('/about');
        this.props.updateHeaderContent('/about');
    }

    render() {
        return(
            <div className='TechnologiesPage-wrapper'>
                {this.props.pageContent.map(box=> {
                    return( 
                        <PageTextImgItem key={box.id}
                        box={box} />
                    )}
                )}
            </div>
        )
    }

}

export default About;