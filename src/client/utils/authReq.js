import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import authTest from './setAuthorizationHeader';
import { login_user } from '../redux/actions/user';

@connect((state) =>( {
    user: state.user
}))

class PrivateRoute extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            auth: this.props.user.isAuthenticated
        }
    }
    componentWillMount(){
        if(typeof window !== "undefined"){
            if(typeof window.localStorage.jwt_token !== "undefined")
            this.setState({
                auth:true
            })
        }
    }
    render() {
        const {component: Component, ...rest} = this.props;
        const route = <Route {...rest} component={Component}/>
        const path = '/login?redirect='+this.props.path;
        const red = <Redirect to={path}/>
        return (
            <div>
                {this.state.auth && route}
                {!this.state.auth && red }
            </div>
        )
    }
}

export default PrivateRoute;