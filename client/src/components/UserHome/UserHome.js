import React, { useState, useEffect} from 'react';
import axios from "axios";
import './UserHome.css'
import Header from "../Header/Header";
import Main from "../Main/Main";

function UserHome(props) {
    const token = props.auth.token;

    const [userinfo, setUserInfo] = useState();

    useEffect(() => {
        axios.get('/info/userinfo', { params: { token: {token} } }).then(({data}) => {
            console.log(data);
            setUserInfo(data);
            console.log("userinfo ", userinfo);
        }).catch(error=>{
            console.log("error getting current user info: ", error);
        });
    }, []);

    return (
        <div className="App">
            <Header title={"SpotifyExtras"}/>
            <header className="App-header">
                <p className="hello">Hello, {userinfo}!</p>
                <a className="App-link" target="_blank" href={"auth/logout"}>Logout</a>
            </header>
            <Main/>
        </div>
    )
}

export default UserHome;