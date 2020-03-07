import logo from './logo.svg';
import './App.css';
import Login from '../login';
import Dashboard from '../dashboard';
import Auth from '../Auth';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default ()=>{
  return(
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Auth path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  )
}