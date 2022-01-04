import React, {Component} from 'react';
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     window.location.replace('http://localhost:9000/login')
    //     // so this is completely changing the window. I'm thinking, if we somehow make this a api call?
    //     // and get the access code and whatever as return values, then... this would be much easier.
    // }

    render() {
        return (
            <div>
                <h1>Just a second :) Redirecting... </h1>
            </div>
        );
    }
}

export default Login;