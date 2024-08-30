import React from "react";

import './Track.css';

function Track(props) {

    function renderAction()
    {
        if(props.isRemoval) {
            return (
                <button className="track-action">
                    -
                </button>
            );   
        }

        return (
            <button className="track-action">
                +
            </button>
        );
    }

    return (
        <div className="Track">
            <div className="track-info">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            { renderAction() }
        </div>
    );
}

export default Track;