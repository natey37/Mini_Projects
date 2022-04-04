import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route } from 'react-router'

ReactDOM.render(
    <Router>
        <Route path='/' component={App} />
    </Router>, 
    document.getElementById('root')
);


