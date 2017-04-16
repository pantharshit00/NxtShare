import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Home from '../home/home';
import Login from '../login/login';
import Navbar from '../navbar/navbar';
import Register from '../register/register';

class Routes extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path='/register' component={Register}/>
            </div>
        );
    }
}

export default Routes;