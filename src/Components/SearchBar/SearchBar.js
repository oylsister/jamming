import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar()
{
    const songName = useState("");

    return (
        <div className="searchbar-container">
            <div className="searchbar-input">
                <input placeholder="Search Your Song." />
            </div>
            <div className="searchbar-submit">
                <button type="submit">Let's go!</button>    
            </div>    
        </div>
    );
}

export default SearchBar;