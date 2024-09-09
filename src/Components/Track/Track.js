import React, { useCallback } from "react";

import './Track.css';

function Track(props) 
{
    const addToPlaylist = useCallback(
        (event) => {
            props.onAdd(props.track);
        },
        [props.onAdd, props.track]
    );

    const removeFromPlaylist = useCallback(
        (event) => {
            props.onRemove(props.track);
        },
        [props.onRemove, props.track]
    );
    function renderAction()
    {
        if(props.isRemoval) {
            return (
                <button className="track-action" onClick={removeFromPlaylist}>
                    -
                </button>
            );   
        }

        return (
            <button className="track-action" onClick={addToPlaylist}>
                +
            </button>
        );
    }

    return (
        <div className="Track">
            <div className="track-info">
                <h3 className="track-name">{props.track.name}</h3>
                <p className="track-details">
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            { renderAction() }
        </div>
    );
}

export default Track;