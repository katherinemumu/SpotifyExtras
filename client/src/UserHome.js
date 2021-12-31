import React, { useState, useEffect} from 'react';
import axios from "axios";

function UserHome(props) {
    const token = props.auth.token;

    // const [userinfo, setUserInfo] = useState(null);

    // useEffect(() => {
    //     axios.get('/info/userinfo/:{token}').then(({data}) => {
    //         setUserInfo(data);
    //     }).catch(error=>{
    //         console.log("error getting current user info");
    //     });
    // }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>Hello!</p>
            </header>
        </div>
    )
}

export default UserHome;