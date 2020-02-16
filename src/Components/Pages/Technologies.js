import React from 'react';

class Technologies extends React.Component {

    componentDidMount() {
        this.props.updatePath('/tech');
        this.props.updateHeaderContent('/tech');
    }

    render() {
        return(
            <div className='home-page-main-container'>
                <section>
                   <h1>Technologies</h1>
                </section>
            </div>
        )
    }

}

export default Technologies;