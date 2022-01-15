import axios from "axios";
import React, { useState, useEffect} from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom'

function Tracklist(props) {
    const [tracklist, setTracklist] = useState([]);

    const id = useParams().id;
    const token = props.token;

    useEffect(() => {
        axios.get('/playlists/tracklist', { params: { id: {id}, token: {token} } }).then(({data}) => {
            console.log(data);
            setTracklist(data);
        }).catch(error=>{
            console.log("error getting tracklist: ", error);
        });
    }, []);

    return (
        <div className="App">
            {tracklist.map((item) => (
                <p>{item.name} - {item.artist}</p>
            ))}
        </div>
    );
};

export default Tracklist;