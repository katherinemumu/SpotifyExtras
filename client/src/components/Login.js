import React, {Component} from 'react';
import '../Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.location.replace('http://localhost:9000/login')
    }

    render() {
        return (
            <div>
                <h1>Just a second :) Redirecting... </h1>
            </div>
        );
    }
}

export default Login;