
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Admin from './pages/admin/admin';
import Login from './pages/login/login';

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Login}></Route>
                <Route path="/admin" component={Admin}></Route>
            </Router>
        );
    }
}

export default App;