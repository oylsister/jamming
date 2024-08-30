import './JammingMain.css';
import '../Components/SearchBar/SearchBar';
import SearchBar from '../Components/SearchBar/SearchBar';
import Tracklist from '../Components/Tracklist/Tracklist';

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

function JammingMain() {
  return (
    <div className="App">
      <div className='App-title'>
        <h1 className="App-name">Ja<span className='App-name-black'>mmm</span>ing</h1>
      </div>
      <SearchBar />
      <Tracklist tracks={newtrack}/>
    </div>
  );
}

export default JammingMain;
