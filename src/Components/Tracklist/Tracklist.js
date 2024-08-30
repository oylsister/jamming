import React from "react";
import Track from "../Track/Track";

function Tracklist(props) {
    return (
        <div className="Tracklist">
            {props.tracks.map((track) => {
                return (
                    <Track track={track} isRemoveal={false}/>
                );
            })}
        </div>
    );
}

export default Tracklist;