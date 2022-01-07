import React, { useState, useEffect} from 'react';
import axios from "axios";
import './UserHome.css'

function UserHome(props) {
    const token = props.token;

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
            <header className="App-header">
                <p className="hello">Hello, {userinfo}!</p>
            </header>
        </div>
    )
}

export default UserHome;