import React from "react";
import Track from "../Track/Track";

function Tracklist(props) {
    return (
        <div className="Tracklist">
            {props.tracks.map((track) => {
                return (
                    <Track track={track} isRemoval={props.isRemoval}/>
                );
            })}
        </div>
    );
}

export default Tracklist;