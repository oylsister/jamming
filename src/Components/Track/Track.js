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