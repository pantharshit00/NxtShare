import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class Login_form extends Component {
    static propTypes = {
        history: React.PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            mainError: ''
        }
    }

    componentDidMount() {
        this.refs.username.onfocus = () => {
            this.setState({
                mainError: ''
            })
        }
        this.refs.password.onfocus = () => {
            this.setState({
                mainError: ''
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.mainError}
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                    <div className="form-group">
                        <label><h4>Email</h4></label>
                        <input autoFocus ref="username" type="email" placeholder="Email goes here..." className="form-control" />
                    </div>
                    <div className="form-group">
                        <label><h4>Password</h4></label>
                        <input ref="password" type="password" placeholder="Password goes here..." className="form-control" />
                    </div>
                    <div className="form-group">
                        <input ref="submit" type="submit" value="Submit" className="form-control submit-btn" />
                    </div>
                </form>
            </div>
        );
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.refs.submit.value = "Submitting..."
        this.refs.submit.className += " bg-animation"
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        if (!username || !password) {
            this.refs.submit.value = "Submit"
            this.refs.submit.className = "form-control submit-btn"
            this.setState({
                mainError: <div className="alert alert-danger"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> &nbsp;Please Fill in all the Fields</div>
            })
        }
        else {
            axios.post('/api/login', {
                email: username,
                password
            }).then(res => {
                this.refs.submit.value = "Submit"
                this.refs.submit.className = "form-control submit-btn"
                let data = res.data;
                if (data.status !== "ok") {
                    this.setState({
                        mainError: <div className="alert alert-danger"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> &nbsp;Something went wrong in the server. Sorry</div>
                    })
                }
                else {
                    if (!data.isAuthenticated) {
                        this.refs.username.value = '';
                        this.refs.password.value = '';
                        this.setState({
                            mainError: <div className="alert alert-danger"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> &nbsp;{data.error}</div>
                        })
                    }
                    else {
                        window.localStorage.setItem("jwt_token", data.token)
                        this.props.history.push('/')
                    }
                }
            }).catch(err => {
                this.refs.submit.value = "Submit"
                this.refs.submit.className = "form-control submit-btn"
                this.setState({
                    mainError: <div className="alert alert-danger"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> &nbsp;Something went wrong in the server. Sorry</div>
                })
            })
        }
    }
}

export default withRouter(Login_form);