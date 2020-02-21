import React from 'react';

import '../../../Styles/PageTextImgItem.css'

class PageTextImgItem extends React.Component {

    

    render(){
        return(
            <div className="PageTextImgItem-wrapper" key={this.props.key}>
                <div className="PageTextImgItem-flex-wrapper">
                    <div className="PageText-content-container">
                        <h2 className="page-text-content-header" key={this.props.id}>
                            {this.props.box.textHeader}
                        </h2>
                        <p className="page-text-content">
                            {this.props.box.textBody}
                        </p>
                    </div> 
                    <div className="page-img-container">
                        <img src={this.props.box.imgSrc}/>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default PageTextImgItem;