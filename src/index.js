import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SiteHeader from './Components/SiteHeader/SiteHeader';
import CustomNavBar from './Components/CustomerNavBar/CustomNavBar.js';
import Home from './Components/Home/Home.js';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';


class Index extends React.Component {
    constructor(props) {
        super(props);

        this.setState = {
            urlPath: ''
        }
    }

    render() {
        return(
        
            <Router>
                <CustomNavBar />
                <SiteHeader />

                <Route 
                    path="/"
                    exact
                    component={Home} />
                <Route
                    path="/about"
                    exact
                    component={About} />
                <Route 
                    path="/projects"
                    exact
                    render={props => <Projects {...props}/>} />
                <Route 
                    path="/contact"
                    exact
                    component={Contact}/>
            </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
