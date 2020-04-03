import React from 'react';

import '../../../Styles/PageTextImgItem.css'

class PageTextImgItem extends React.Component {

    configureContent() {
        if (this.props.box.imgSrc) {
            return(
                <div className="page-img-container">
                    <img src={this.props.box.imgSrc}/>
                </div>
            )
        }

    }

    render(){
        return(
            <div className="PageTextImgItem-wrapper" key={this.props.key}
                style={{
                    padding: this.props.box.imgSrc ? "1em" : "1em 13em"
                }}>
                <div className="PageTextImgItem-flex-wrapper"
                style={{justifyContent: this.props.box.imgSrc ?
                            "center" : "left"}}>
                    <div className="PageText-content-container"
                        style={{
                            textAlign: this.props.box.imgSrc ? 
                                "center" : "left",
                            gridColumn: this.props.box.imgSrc ?
                                "2" : "2/4",
                            marginTop: this.props.box.imgSrc ?
                                "0px" : "0em",
                            }}>
                        
                        <h2 className="page-text-content-header" key={this.props.id}>
                            {this.props.box.textHeader}
                        </h2>
                        <p className="page-text-content">
                            {this.props.box.textBody}
                        </p>
                    </div> 
                    {this.configureContent()}
                </div>
                <hr />
            </div>
        )
    }
}

export default PageTextImgItem;