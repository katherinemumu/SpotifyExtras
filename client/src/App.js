import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Home from "./Home"
import UserHome from "./UserHome";
import Loading from "./Loading";

function App() {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
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
        console.log("WE CAN LOAD USER HOME NOW", token);
        return <UserHome auth={auth}/>
    }
    return <Home/>
}

export default App;