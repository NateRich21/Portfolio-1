import React from 'react';
import '../../Styles/Home.css'

class Home extends React.Component {

    componentDidMount() {
        this.props.updatePath('/');
        this.props.updateHeaderContent('/');
    }

    render() {
        return(
            <div className='HomePage-wrapper'>
            </div>
        )
    }

}

export default Home;