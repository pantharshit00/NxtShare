import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

class Login extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Login | NxtShare</title>
                </Helmet>
                <h1>This is indeed login</h1>
            </div>
        );
    }
}

export default Login;