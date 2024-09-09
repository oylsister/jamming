import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './Playlist.css'

function Playlist(props) {

    function handleNameChange(event) {
        props.OnNameChange(event.target.value);
    }

    return (
        <div className="Playlist">
            <input className="playlist-title" onChange={handleNameChange} defaultValue={"New PlayList"} />
            <Tracklist tracks={props.playlistTracks} isRemoval={true} onRemove={props.onRemove}/>
            <div className="button-container">
                <button className="save-button" onClick={props.onSave}>Save to Spotify</button>
            </div>
        </div>
    );
}

export default Playlist;