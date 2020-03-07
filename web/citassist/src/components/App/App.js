import './App.css';
import Login from '../login';
import Dashboard from '../dashboard';
import Auth from '../Auth';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Login />
                </Route>
                <Route path='/Login'>
                    <Login />
                </Route>
                <Auth path='/Dashboard' component={Dashboard} />
            </Switch>
        </Router>
    );
};
