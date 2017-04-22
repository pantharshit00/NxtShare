import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Register_form from '../register/components/register_form';
import authHeader from '../../utils/setAuthorizationHeader';

class Home extends Component {
    componentDidMount() {
        authHeader();
        if (typeof window !== "undefined") {
            window.sr.reveal("#animate-container", { origin: 'left', duration: 1200, distance: '1000px' })
            window.sr.reveal("#animate-left", { origin: "right", distance: "500px", delay: 500, duration: 1200 })
        }
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home | NxtShare</title>
                    <script>{`$(function(){ $("#text-typed").typed({strings:['Level','Thoughts','Mind','Write','Wit','You','Share'],typeSpeed: 5,backDelay: 1200 })});`}</script>
                    <script>{`$(function(){ $("#para").typed({strings:['Have a great idea.'],typeSpeed: 50,backDelay: 1200 })});`}</script>
                </Helmet>
                <div className="card">
                    <div className="container">
                        <div id="animate-container" className="row">
                            <div className="col-md-8">
                                <h1 style={{ fontSize: 56 + 'px' }} className="text-center">Nxt<span id="text-typed" class="brand-color"></span></h1>
                                <div className="write-area">
                                //test
                                </div>
                            </div>
                            <div className="col-md-4" id="animate-left">
                                <h1>Join the fame now</h1>
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

export default Home;