import React from 'react';
import InfoTextBox from './PageComponents/InfoTextBox'
import PageTextImgItem from './PageComponents/PageTextImgItem';

import '../../Styles/Home.scss'

class Home extends React.Component {

    componentDidMount() {
        this.props.updatePath('/');
        this.props.updateHeaderContent('/');
    }

    render() {
        return(
            <div className='home-page-main-container'>
                <InfoTextBox />
                <PageTextImgItem />
                
                <InfoTextBox />
            </div>
        )
    }

}

export default Home;