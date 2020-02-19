import React from 'react';

import '../../../Styles/InfoTextBox.css'

class InfoTextBox extends React.Component {
    render() {
        return (
            <div className="InfoTextBox-outer-container">
                <div className='InfoTextBox-grid-container'>
                    <h2 className='content-lg-top'>Testing Testing</h2>
                    <p className='content-sm'>This is a test, check it out. i'm testing stuff. Testy testy test boi. Test time, let's make some text</p>
                    <p className='content-sm'>Oh man, here we go again, more test text. I need to come up with more stuff to write and then use scratchpad to test format the layout.</p>
                </div>
                <hr />
            </div>
        )
    }
}

export default InfoTextBox;