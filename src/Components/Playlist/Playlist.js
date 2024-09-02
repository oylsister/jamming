import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './Playlist.css'

function Playlist(props) {

    function handleNameChange(event) {
        props.OnNameChange(event.target.value);
    }

    return (
        <div className="Playlist">
            <input className="title" onChange={handleNameChange} defaultName={"New PlayList"} />
            <Tracklist tracks={props.playlistTracks} isRemoval={true} onRemove={props.onRemove}/>
        </div>
    );
}

export default Playlist;