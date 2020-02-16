import React from 'react';

class Home extends React.Component {

    componentDidMount() {
        this.props.updatePath('/home');
        this.props.updateHeaderContent('/home');
    }

    render() {
        return(
            <div className='home-page-main-container'>
                <section>
                   <h1>Featured Project</h1>
                </section>
            </div>
        )
    }

}

export default Home;