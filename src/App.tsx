
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import './App.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/admin" component={Admin}></Route>

                </div>
            </Router>
        );
    }
}

export default App;