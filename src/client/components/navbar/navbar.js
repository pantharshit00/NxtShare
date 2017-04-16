import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

if (typeof window !== "undefined") {
    var ScrollReveal = require("scrollreveal");
}

class Navbar extends Component {
    componentDidMount() {
        if (typeof window !== "undefined") {
            window.sr = new ScrollReveal()
            sr.reveal(".navbar", { origin: 'top', duration: 1200, distance:'500px' })
        }
    }
    render() {
        return (
            <nav class="navbar navbar-inverse">
                <Helmet>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/1.1.7/typed.min.js"/>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                </Helmet>
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Nxt<span className="brand-color">Share</span></a>
                    </div>
                    <div id="navbar" class="collapse navbar-collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li><NavLink to={'/'} exact>Home</NavLink></li>
                            <li><NavLink to={'/login'}>Login</NavLink></li>
                            <li><NavLink to={'/register'}>Register</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;