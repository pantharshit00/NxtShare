import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Register_form extends Component {
    static propTypes = {
        history: React.PropTypes.object.isRequired
    }
    constructor() {
        super()
        this.state = {
            error: '',
            emailError: '',
            passwordError: ''
        }
    }
    componentDidMount() {
        [].forEach.call(document.getElementsByTagName("input"), (el) => {
            el.addEventListener("focus", (e) => {
                this.setState({
                    error: '',
                    emailError: '',
                    passwordError: ''
                })
            });
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {this.state.error}
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" autoFocus placeholder="Name goes here..." className="form-control" ref="name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Email goes here..." className="form-control" ref="email" />
                        <p className="text-danger">{this.state.emailError}</p>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Password goes here..." className="form-control" ref="password" />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Enter password one more time..." className="form-control" ref="password2" />
                    </div>
                    <p className="text-danger">{this.state.passwordError}</p>
                    <div className="form-group">
                        <input ref="submit" type="submit" value="Submit" className="form-control submit-btn" />
                    </div>
                </form>
            </div>
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        this.refs.submit.value = "Submitting..."
        this.refs.submit.className += " bg-animation"
        const email = this.refs.email.value;
        const name = this.refs.name.value;
        const password = this.refs.password.value;
        const password2 = this.refs.password2.value;

        if (!email || !name || !password || !password2) {
            this.setState({
                error: <div className="alert alert-danger">Please Fill in all the Fields</div>
            })
            this.refs.submit.value = "Submit"
            this.refs.submit.className = "form-control submit-btn"
        }
        else if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) == false) {
            this.setState({
                emailError: "Email is not valid"
            })
            this.refs.email.value = '';
        }
        else if (password !== password2) {
            this.setState({
                passwordError: "Passwords do not match"
            })
            this.refs.password.value = '';
            this.refs.password2.value = '';
            this.refs.submit.value = "Submit"
            this.refs.submit.className = "form-control submit-btn"
        }
        else if (password.length < 8) {
            this.setState({
                passwordError: 'Password should be 8 characters long'
            })
            this.refs.password.value = '';
            this.refs.password2.value = '';
            this.refs.submit.value = "Submit"
            this.refs.submit.className = "form-control submit-btn"
        }
        else {
            axios.post('/api/register', {
                name,
                email,
                password,
                password2
            }).then((res) => {
                this.refs.submit.value = "Submit"
                this.refs.submit.className = "form-control submit-btn"
                let data = res.data;
                if (data.registered) {
                    this.props.history.push('/login')
                }
                else if (data.errField == "email") {
                    this.setState({
                        error: <div className="alert alert-danger">{data.err}</div>,
                        emailError: "Try other email"
                    })
                    this.refs.email.value = '';
                }
                else {
                    this.setState({ error: <div className="alert alert-danger">{data.err}</div> })
                }
            })
                .catch(err => {
                    this.refs.submit.value = "Submit"
                    this.refs.submit.className = "form-control submit-btn"
                    this.setState({
                        error: <div className="alert alert-danger">Something went wrong in the server. Sorry</div>
                    })
                })
        }
    }
}

export default withRouter(Register_form);