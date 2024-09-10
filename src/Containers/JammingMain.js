import './JammingMain.css';
import '../Components/SearchBar/SearchBar';
import SearchBar from '../Components/SearchBar/SearchBar';
import SearchResults from '../Components/SearchResults/SearchResults';
import Playlist from '../Components/Playlist/Playlist';
import Spotify from '../Utils/Spotify';
import { useCallback, useState } from 'react';
import Account from '../Components/Account/Account';

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
  const [searchResult, setSearchResult] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  // console.log(defaultSearchList);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResult);
    Spotify.getUser();
    //console.log(list);
    // setSearchResult(list);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if(playlistTracks.some((savedTrack) => savedTrack.name === track.name))
        return;

      setSearchResult((prevTracks) => prevTracks.filter((currentTrack) => currentTrack.name !== track.name));
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [searchResult, playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter((currentTrack) => currentTrack.name !== track.name));
  }, []);

  const renamePlayList = useCallback((name) => {
    setPlaylistName(name)
    //console.log(`TrackListName: ${name}`);
  }, []);

  const savedPlayList = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    })
  }, [playlistName, playlistTracks]);

  const connect = useCallback(() => {
    var result = Spotify.getUser().then(setUser);

    console.log(result);

    if(result == -1)
    {
      console.log("Failed");
      return;
    }

    setLogin(true);

    console.log("This supposed to be login!");
    console.log(user);
  }, []);

  return (
    <>
      <div className='App-title'>
          <h1 className="App-name">Ja<span className='App-name-black'>mmm</span>ing</h1>
          <Account login={login} onConnect={connect} users={user}/>
      </div>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className='result-list'>
          <SearchResults searchResult={searchResult} onAdd={addTrack} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} OnNameChange={renamePlayList} onRemove={removeTrack} onSave={savedPlayList}/>
        </div>
      </div>
    </>
  );
}

export default JammingMain;
