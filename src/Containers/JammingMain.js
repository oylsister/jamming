import './JammingMain.css';
import '../Components/SearchBar/SearchBar';
import SearchBar from '../Components/SearchBar/SearchBar';

function JammingMain() {
  return (
    <div className="App">
      <div className='App-title'>
        <h1 className="App-name">Ja<span className='App-name-black'>mmm</span>ing</h1>
      </div>
      <SearchBar />
    </div>
  );
}

export default JammingMain;
