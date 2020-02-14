import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headerContent } from './Components/VisualComponents/SiteHeader/HeaderContent.js'

import SiteHeader from './Components/VisualComponents/SiteHeader/SiteHeader';
import CustomNavBar from './Components/VisualComponents/CustomerNavBar/CustomNavBar.js';
import Home from './Components/Pages/Home/Home.js';
import Projects from './Components/Pages/Projects/Projects.js';
import About from './Components/Pages/About/About.js';
import Contact from './Components/Pages/Contact/Contact.js';




class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urlPath: "",
            headerContent: headerContent,
            currentHeader: {}
        }

        this.updatePath = this.updatePath.bind(this);
        this.updateHeaderContent = this.updateHeaderContent.bind(this);

    }

    updatePath = (pathname) => {
        this.setState({urlPath: pathname})
    }   

    updateHeaderContent = (pathname) => {
        if (pathname === '/home') {  this.setState({ currentHeader: this.state.headerContent.home })  };
        if (pathname === '/about') {  this.setState({ currentHeader: this.state.headerContent.about })  };
        if (pathname === '/projects') {  this.setState({ currentHeader: this.state.headerContent.projects })  };
        if (pathname === '/contact') {  this.setState({ currentHeader: this.state.headerContent.contact })  };
    }

    render() {
        return(
        
            <Router>
                <CustomNavBar />
                <Route
                    path='/(home|about|projects|contact)/'
                    exact
                    render={props => <SiteHeader {...props} 
                    currentHeader={this.state.currentHeader}
                    urlPath={this.state.urlPath} />}
                />
               <Switch>
                    <Route 
                        path="/home"
                        exact
                        render={props => <Home {...props} 
                        updatePath={this.updatePath}
                        urlPath={this.urlPath}
                        updateHeaderContent={this.updateHeaderContent} />}
                    />
                    <Route
                        path="/about" 
                        exact  
                        render={props => <About {...props} 
                        updatePath={this.updatePath}
                        urlPath={this.urlPath}
                        updateHeaderContent={this.updateHeaderContent} />}
                    />
                    <Route 
                        path="/projects"
                        exact
                        render={props => <Projects {...props} 
                        updatePath={this.updatePath}
                        urlPath={this.urlPath}
                        updateHeaderContent={this.updateHeaderContent} />}
                    />
                    <Route 
                        path="/contact"
                        exact
                        render={props => <Contact {...props} 
                        updatePath={this.updatePath}
                        urlPath={this.urlPath}
                        updateHeaderContent={this.updateHeaderContent} />}
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
