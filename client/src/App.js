import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import NavBar from "./NavBar";
import Home from "./Home"
import Login from "./Login"
import UserHome from "./UserHome";
import Loading from "./Loading";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
        <Loading/>
    } else if (auth) {
        <UserHome/>
    }
    return <Home/>
}

export default App;