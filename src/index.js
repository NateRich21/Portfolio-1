import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
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

        this.state = {
            urlPath: ""
        }

        this.updatePath = this.updatePath.bind(this);
    }

    updatePath = (pathname) => {
        this.setState({urlPath: pathname})
    }   

    render() {
        return(
        
            <Router>
                <CustomNavBar />
                <Route
                    path='/(home|about|projects|contact)/'
                    exact
                    render={props => <SiteHeader {...props} 
                    updatePath={this.updatePath}/>}
                     />
                    <Switch>
                        <Route 
                            path="/home"
                            exact
                            render={props => <Home {...props} 
                            updatePath={this.updatePath}/>}
                        />
                        <Route
                            path="/about" 
                            exact  
                            render={props => <About {...props} 
                            updatePath={this.updatePath}/>}
                        />
                        <Route 
                            path="/projects"
                            exact
                            render={props => <Projects {...props} 
                            updatePath={this.updatePath}/>}
                        />
                        <Route 
                            path="/contact"
                            exact
                            render={props => <Contact {...props} 
                            updatePath={this.updatePath}/>}
                        />
                    </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
