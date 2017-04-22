import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../utils/authReq';

import Index from '../index/index';
import Login from '../login/login';
import Navbar from '../navbar/navbar';
import Register from '../register/register';
import Home from '../home/home';

class Routes extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path='/register' component={Register} />
                    <PrivateRoute exact path="/home" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default Routes;