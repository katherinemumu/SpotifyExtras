import axios from "axios";
import React, { useState, useEffect} from 'react';
import {Link} from "react-router-dom";

function Playlist(props) {
    console.log("props.id ", props.id);

    return (
        <div className="App">
            <Link to={`/tracklist/${props.id}`}>{props.name}</Link>
        </div>
    );
}

export default Playlist;
