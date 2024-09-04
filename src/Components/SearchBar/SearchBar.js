import React, { useState, useCallback } from "react";
import "./SearchBar.css";

function SearchBar(props)
{
    const [searchName, setSearchName] = useState("");

    function handleSearch(event)
    {
        event.preventDefault();
        // Search the song!
        SearchSong();
    }

    const SearchSong = useCallback(() => {
        props.onSearch(searchName);
    }, [props.onSearch, searchName]);

    const handleNameChange = ((event) => {
        setSearchName(event.target.value);
    });

    return (
        <form onSubmit={handleSearch}>
            <div className="searchbar-container">
                <div className="searchbar-input">
                    <input placeholder="Search Your Song." onChange={handleNameChange}/>
                </div>
                <div className="searchbar-submit">
                    <button type="submit">Let's go!</button>    
                </div>    
            </div>
        </form>
    );
}

export default SearchBar;