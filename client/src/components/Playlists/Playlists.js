import axios from "axios";
import React, { useState, useEffect} from 'react';
import Playlist from '../Playlist/Playlist';

function Playlists(props) {
    const token = props.token;

    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        axios.get('/playlists/listAll', { params: { token: {token} } }).then(({data}) => {
            console.log(data);
            setPlaylists(data);
        }).catch(error=>{
            console.log("error getting playlists list: ", error);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>Playlists!</p>
                {playlists.map((item) => (
                    <Playlist key={item.url} name={item.name} id={item.id}/>
                ))}
            </header>
        </div>
    );
}

export default Playlists;
