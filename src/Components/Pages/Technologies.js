import React from 'react';

class Technologies extends React.Component {

    componentDidMount() {
        this.props.updatePath('/tech');
        this.props.updateHeaderContent('/tech');
    }

    render() {
        return(
            <div className='TechnologiesPage-wrapper'>
                <section>
                   <h1>Technologies Page coming soon</h1>
                </section>
            </div>
        )
    }

}

export default Technologies;