import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from '../home/home';
import Login from '../login/login';

class Routes extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        );
    }
}

export default Routes;