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




class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urlPath: "",
            headerItems: {}
        }

        this.updatePath = this.updatePath.bind(this);
        this.updateHeaderContent = this.updateHeaderContent.bind(this);
    }

    updatePath = (pathname) => {
        this.setState({urlPath: pathname})
    }   

    updateHeaderContent = () => {
		if (this.state.urlPath === '/home') { 
            this.setState({ headerItems: headerContent.home }) 
        };
        if (this.state.urlPath === '/projects') { this.setState({ headerItems: headerContent.projects }) };
        if (this.state.urlPath === '/about') { this.setState({ headerItems: headerContent.about }) };
		if (this.state.urlPath === '/contact') { this.setState({ headerItems: headerContent.contact }) };	};

    render() {
        return(
        
            <Router>
                <CustomNavBar />
                <Route
                    path='/(home|about|projects|contact)/'
                    exact
                    render={props => <SiteHeader {...props} 
                    updatePath={this.updatePath}
                    urlPath={this.state.urlPath} />}
                />
               <Switch>
                    <Route 
                        path="/home"
                        exact
                        render={props => <Home {...props} 
                        updatePath={this.updatePath}
                        updateHeaderContent={this.updateHeaderContent} />}
                    />
                    <Route
                        path="/about" 
                        exact  
                        render={props => <About {...props} 
                        updatePath={this.updatePath}
                        updateHeaderContent={this.updateHeaderContent} />}
                    />
                    <Route 
                        path="/projects"
                        exact
                        render={props => <Projects {...props} 
                        updatePath={this.updatePath}
                        updateHeaderContent={this.updateHeaderContent} />}
                    />
                    <Route 
                        path="/contact"
                        exact
                        render={props => <Contact {...props} 
                        updatePath={this.updatePath}
                        updateHeaderContent={this.updateHeaderContent} />}
                    />
               </Switch>
            </Router>
        )
    }
}

export default App;