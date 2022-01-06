/**
 * This is the screen that displays when the user is not yet logged in.
 */

import React from 'react';
import Header from "../Header/Header";
// import spotify_logo from "./spotify_logo.svg";

function Home() {
    return (
        <div className="App">
            <Header title={"SpotifyExtras"}/>
            <header className="App-header">
                <p>You are not logged into Spotify.</p>
                <a className="App-link" target="_blank" href={"auth/login"}>Login to Spotify</a>
            </header>
        </div>
    )
}

export default Home;