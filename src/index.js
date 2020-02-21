import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


import './Styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import { headerContent } from './Components/Resources/HeaderContent.js'


import SiteHeader from './Components/VisualComponents/SiteHeader';
import CustomNavBar from './Components/VisualComponents/CustomNavBar.js';
import Home from './Components/Pages/Home.js';
import Projects from './Components/Pages/Projects.js';
import About from './Components/Pages/About.js';
import Contact from './Components/Pages/Contact.js';
import Technologies from './Components/Pages/Technologies.js';

var _ = require('lodash');


class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urlPath: "",
            headerContent: headerContent,
            currentHeader: {},
            pageContent: [],
            headerHasImage: Boolean
        }

        this.updatePath = this.updatePath.bind(this);
        this.updateHeaderContent = this.updateHeaderContent.bind(this);
    }

    updatePath = (pathname) => {
        this.setState({urlPath: pathname})
    }

    updateHeaderContent = (pathname) => {
        if (pathname === '/') { this.setState({ 
            currentHeader: _.get(headerContent, 'contentArray[2].home')
        }) };
        if (pathname === '/about') {  this.setState({ 
            currentHeader: _.get(headerContent, 'contentArray[1].about') 
        }) };
        if (pathname === '/projects') {  this.setState({ 
            currentHeader: _.get(headerContent, 'contentArray[0].projects') 
        }) };
        if (pathname === '/contact') {  this.setState({ 
            currentHeader: _.get(headerContent, 'contentArray[3].contact') 
        }) };
        if (pathname === '/tech') {  this.setState({ 
            currentHeader: _.get(headerContent, 'contentArray[4].tech'),
            pageContent: _.get(headerContent, 'contentArray[4].tech.pageContent')
        }) };
    }

    render() {
        return(
        
           <div className="App-grid-wrapper">
                <Router>
                    <CustomNavBar />
                        
                     
                   <Route
                        path='/'
                        render={props => <SiteHeader {...props} 
                        currentHeader={this.state.currentHeader}
                        urlPath={this.state.urlPath} />}
                    />
                   
                        <Switch>
                            <Route 
                                path="/" exact render={props => <Home {...props} 
                                updatePath={this.updatePath}
                                urlPath={this.urlPath}
                                updateHeaderContent={this.updateHeaderContent} />}
                            />
                            <Route
                                path="/about" exact render={props => <About {...props} 
                                updatePath={this.updatePath}
                                urlPath={this.urlPath}
                                updateHeaderContent={this.updateHeaderContent} />}
                            />
                            <Route 
                                path="/projects" exact render={props => <Projects {...props} 
                                updatePath={this.updatePath}
                                urlPath={this.urlPath}
                                updateHeaderContent={this.updateHeaderContent} />}
                            />
                            <Route 
                                path="/contact" exact render={props => <Contact {...props} 
                                updatePath={this.updatePath}
                                urlPath={this.urlPath}
                                updateHeaderContent={this.updateHeaderContent} />}
                            />
                            <Route
                                path="/tech" exact render={props => <Technologies {...props} 
                                updatePath={this.updatePath}
                                urlPath={this.urlPath}
                                updateHeaderContent={this.updateHeaderContent}
                                currentHeader={this.state.currentHeader}
                                pageContent={this.state.pageContent} />}
                            />
                        </Switch>
                   
                </Router>
           </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
