import { Switch, Route } from 'react-router-dom';
import UserHome from '../UserHome/UserHome';
import Playlists from '../Playlists/Playlists';
import Wrapped from '../Wrapped/Wrapped';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../Header/Header";

function Main(props) {
    const token = props.auth.token;

    return (
        <div>
            <Header title={"SpotifyExtras"}/>
            <Switch>
                <Route path={"/wrapped"}>
                    <Wrapped/>
                </Route>
                <Route path={"/playlists"}>
                    <Playlists/>
                </Route>
                <Route path={"/"}>
                    <UserHome token={token}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Main;