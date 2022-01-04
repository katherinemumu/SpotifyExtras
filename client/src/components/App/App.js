import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Home from "../Home/Home"
import UserHome from "../UserHome/UserHome";
import Loading from "../../Loading";

function App() {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        console.log("in useEffect");
        axios.get('/auth/current-session').then(({data}) => {
            setAuth(data);
        }).catch(error=>{
            console.log("error getting current session");
        });
    }, []);

    console.log(auth);

    if(auth == null) {
        return <Loading/>
    } else if (auth) {
        const token = auth.token;
        return <UserHome auth={auth}/>
    }
    return <Home/>
}

export default App;