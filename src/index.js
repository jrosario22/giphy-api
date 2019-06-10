import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Notfound from './notfound';
import Regular from './regular';
import Trending from './trending';
import Random from './random';

const giphysearch = (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/regular">Search</Link></li>
                <li><Link to="/trending">Trending</Link></li>
                <li><Link to="/random">Random</Link></li>
            </ul>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/regular" component={Regular} />
            <Route path="/trending" component={Trending} />
            <Route path="/random" component={Random} />
            <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(giphysearch, document.getElementById('root'));
