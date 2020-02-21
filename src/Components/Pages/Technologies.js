import React from 'react';
import PageTextImgItem from './PageComponents/PageTextImgItem'

var _ = require('lodash')

class Technologies extends React.Component {
    componentDidMount() {
        this.props.updatePath('/tech');
        this.props.updateHeaderContent('/tech');
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

export default Technologies;