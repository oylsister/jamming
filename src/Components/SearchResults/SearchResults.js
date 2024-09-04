import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './SearchResults.css'

function SearchResults(props) {
    return (
        <div className="SearchResults">
            <h2 className="title">Search Result</h2>
            <Tracklist tracks={props.searchResult} onAdd={props.onAdd} />
        </div>
    );
}

export default SearchResults;