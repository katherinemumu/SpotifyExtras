import axios from "axios";
import React, { useState, useEffect} from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom'

function Tracklist(props) {
    const [tracklist, setTracklist] = useState([]);

    const id = useParams().id;

    // const { href } = location.state;

    // useEffect(() => {
    //     console.log(location.state);
    // }, []);

    return (
        <div className="App">
            <p>{id}</p>
            {/*<p>{props.location.href}</p>*/}
            {/*{tracklist.map((item) => (*/}
            {/*    <p>item.title item.artist</p> */}
            {/*))}        */}
        </div>
    );
}

export default Tracklist;