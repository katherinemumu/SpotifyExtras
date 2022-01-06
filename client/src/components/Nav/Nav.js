import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css';

function Nav(props) {
    const items = [
        { title: 'Wrapped (Google)', url: "http://www.google.com" },
        { title: 'Playlists (Amazon)', url: "http://www.amazon.ca" },
    ];

    return (
      <nav className={"navbar"}>
          <Link to={"/wrapped"}>Wrapped</Link>
          <Link to={"/playlists"}>Playlists</Link>
      </nav>
    );
}

export default Nav;