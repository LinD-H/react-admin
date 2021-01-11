
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './pages/admin/admin';
import Login from './pages/login/login';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/" component={Admin}></Route>
                </Switch>

            </Router>
        );
    }
}

export default App;