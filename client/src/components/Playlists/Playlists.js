import axios from "axios";
import React, { useState, useEffect} from 'react';

function Playlists(props) {
    const token = props.token;

    useEffect(() => {
        axios.get('/playlists/listAll', { params: { token: {token} } }).then(({data}) => {
            console.log(data);
        }).catch(error=>{
            console.log("error getting playlists list: ", error);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>Playlists!</p>
            </header>
        </div>
    );
}

export default Playlists;
