import React from 'react';
import InfoTextBox from './PageComponents/InfoTextBox'
import PageTextImgItem from './PageComponents/PageTextImgItem';

import '../../Styles/Home.css'

class Home extends React.Component {

    componentDidMount() {
        this.props.updatePath('/');
        this.props.updateHeaderContent('/');
    }

    render() {
        return(
            <div className='HomePage-wrapper'>
                <InfoTextBox />
                <PageTextImgItem />
                <InfoTextBox /> 
            </div>
        )
    }

}

export default Home;