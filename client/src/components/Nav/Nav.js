import React from 'react'

function Nav(props) {
    const items = [
        'wrapped',
        'playlist',
    ];

    return (
      <nav>
          {items.map((item) => (item))}
      </nav>
    );
}

export default Nav;