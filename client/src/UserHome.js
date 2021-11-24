import React, {Component} from 'react';

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    componentDidMount() {
        fetch("http://localhost:9000/login/userinfo")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res}))
            .catch(err => err);
    }

    render() {
        return (
            <div>
                <p>Hello! Welcome to user home!</p>
                <p>{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default UserHome;