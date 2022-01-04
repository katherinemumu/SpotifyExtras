import React from 'react';
// import spotify_logo from "./spotify_logo.svg";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p>You are not logged into Spotify.</p>
                <a className="App-link" target="_blank" href={"auth/login"}>Login to Spotify</a>
            </header>
        </div>
    )
}

export default Home;