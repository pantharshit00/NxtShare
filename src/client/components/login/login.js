import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Login_form from './components/loginForm';

class Login extends Component {
    componentDidMount() {
        if (typeof window !== "undefined") {
            window.sr.reveal("#animate-row", { origin: 'left', duration: 1200, distance: '400px' })
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Login | NxtShare</title>
                </Helmet>
                <div className="container">
                    <div className="row" id="animate-row">
                        <div className="col-md-5 col-md-offset-3 col-sm-6 col-sm-offset-3">
                            <div class="card login-card">
                                <h2>Login</h2>
                                <hr />
                                <Login_form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;