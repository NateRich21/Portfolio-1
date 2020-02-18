import React from 'react';

import '../../../Styles/PageTextImgItem.css'

class PageTextImgItem extends React.Component {


    render(){
        return(
            <div className="PageTextImgItem-wrapper">
                <div className="PageText-content-container">
                    <h2 className="page-text-content-header">Double Test</h2>
                    <p className="page-text-content">Oh man, here we go again, more test text. I need to come up with more stuff to write and then use scratchpad to test format the layout.</p>
                </div> 
                <div className="page-img-container">
                    <img src="https://curatti.com/wp-content/uploads/2017/11/ReactJS-1000x500.jpg"/>
                </div>
                <div className="PageText-hr-container"><hr /></div>
            </div>
        )
    }
}

export default PageTextImgItem;