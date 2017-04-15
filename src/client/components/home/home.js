import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Home extends Component {
    componentDidMount() {
        if (typeof window !== "undefined") {
            window.sr.reveal("#animate-container", { origin: 'left',duration: 1200, distance: '1000px' })
        }
    }
    render() {
        return (
            <div>
                <Helmet>
                    <script>{`$(function(){ $("#text-typed").typed({strings:['Level','Thoughts','Mind','Write','Wit','You','Share'],typeSpeed: 5,backDelay: 1200 })});`}</script>
                </Helmet>
                <div className="card">
                    <div className="container" id="animate-container">
                        <h1 className="text-center">Nxt<span id="text-typed" class="brand-color"></span></h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;