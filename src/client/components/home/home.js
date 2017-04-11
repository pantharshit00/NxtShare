import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home | NxtShare</title>
                </Helmet>
                <h1>This is indeed home</h1>
            </div>
        );
    }
}

export default Home;