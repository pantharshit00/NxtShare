import React, { Component } from 'react';
import Register_form from './components/register_form';
import {Helmet} from 'react-helmet';

class Register extends Component {
    componentDidMount() {
        if (typeof window !== "undefined") {
            window.sr.reveal("#animate-reg",{origin:"bottom",duration:1200})
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Register | NxtShare</title>
                </Helmet>
                <div className="container">
                    <div className="row" id="animate-reg">
                        <div className="col-md-5 col-md-offset-3 col-sm-6 col-sm-offset-3">
                            <div class="card login-card" style={{marginTop:30+'px'}}>
                                <h2>Register</h2>
                                <hr />
                                <Register_form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;