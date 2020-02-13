import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './Components/App/App.js';
import CustomNavBar from './Components/CustomerNavBar/CustomNavBar.js';
import Home from './Components/Home/Home.js'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About.js'


class Index extends React.Component {

    render() {
        return(
        
            <Router>
                <CustomNavBar />

                <Route 
                    path="/home"
                    exact
                    component={Home} />
                <Route
                    path="/about"
                    exact
                    component={About} />
                <Route 
                    path="/projects"
                    exact
                    component={Projects}/>
            </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
