import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-light border">
                <a className="navbar-brand" href="/">SpotifyExtras</a>

                <div className="collapse navbar-collapse">
                    <ul style={{listStyleType: "none"}} className="collapse navbar-collapse mr-auto mt-2">
                        <li className="nav-item">Login to Spotify</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;