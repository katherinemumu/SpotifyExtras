import React, { useState, useEffect} from 'react';
import axios from "axios";

function UserHome(props) {
    const token = props.auth.token;

    const [userinfo, setUserInfo] = useState();

    useEffect(() => {
        axios.get('/info/userinfo', { params: { token: {token} } }).then(({data}) => {
            console.log(data);
            setUserInfo(data);
            console.log("userinfo ", userinfo);
        }).catch(error=>{
            console.log("error getting current user info");
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>Hello, {userinfo}!</p>
                <a className="App-link" target="_blank" href={"auth/logout"}>Logout</a>
            </header>
        </div>
    )
}

export default UserHome;