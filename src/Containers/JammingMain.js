import './JammingMain.css';
import '../Components/SearchBar/SearchBar';
import SearchBar from '../Components/SearchBar/SearchBar';
import SearchResults from '../Components/SearchResults/SearchResults';
import Playlist from '../Components/Playlist/Playlist';
import { useCallback, useState } from 'react';

const addedPlaylist = [{
  name: "Horse With No Name",
  album: "HWMN",
  artist: "America"
}];

const defaultSearchList = [{
  name: "Kuroi Uta",
  album: "Kuroi Uta",
  artist: "Eir Aoi"
},{
  name: "Hold the Line",
  album: "GTA San Andreas",
  artist: "Toto"
},{
  name: "Re:Topolp",
  album: "Lupercalia",
  artist: "MISOPO"
}];

function JammingMain() {
  const [searchResult, setSearchResult] = useState(defaultSearchList);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState(addedPlaylist);

  const addTrack = useCallback(
    (track) => {
      if(playlistTracks.some((savedTrack) => savedTrack.name === track.name))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter((currentTrack) => currentTrack.name !== track.name));
  }, []);

  const renamePlayList = useCallback((name) => {
    setPlaylistName(name)
    //console.log(`TrackListName: ${name}`);
  }, []);

  return (
    <div className="App">
      <div className='App-title'>
        <h1 className="App-name">Ja<span className='App-name-black'>mmm</span>ing</h1>
      </div>
      <SearchBar />
      <div className='result-list'>
        <SearchResults searchResult={searchResult} onAdd={addTrack} />
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks} OnNameChange={renamePlayList} onRemove={removeTrack}/>
      </div>
    </div>
  );
}

export default JammingMain;
