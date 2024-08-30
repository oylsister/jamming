import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './Playlist.css'

const addedPlaylist = [{
    name: "Horse With No Name",
    album: "HWMN",
    artist: "America"
}];

function Playlist(props) {
    return (
        <div className="Playlist">
            <h2 className="title">My Playlist</h2>
            <Tracklist tracks={addedPlaylist} isRemoval={true}/>
        </div>
    );
}

export default Playlist;