import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './SearchResults.css'

const newtrack = [{
    name: "Horse With No Name",
    album: "HWMN",
    artist: "America"
  },{
    name: "Horse With No Name",
    album: "HWMN",
    artist: "America"
  },{
    name: "Horse With No Name",
    album: "HWMN",
    artist: "America"
  }];

function SearchResults(props) {
    return (
        <div className="SearchResults">
            <h2 className="title">Search Result</h2>
            <Tracklist tracks={newtrack} isRemoval={false}/>
        </div>
    );
}

export default SearchResults;