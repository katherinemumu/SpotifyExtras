import React from 'react'
import Link from "../Link/Link";

function Nav(props) {
    const items = [
        { title: 'Wrapped (Google)', url: 'google.com' },
        { title: 'Playlists (Amazon)', url: 'amazon.ca' },
    ];

    return (
      <nav>
          {items.map((lnk) => (
              <Link lnk={lnk} key={lnk.title} />
          ))}
      </nav>
    );
}

export default Nav;