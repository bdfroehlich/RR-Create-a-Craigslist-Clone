// Import data
import { postings } from './postings.js';
import Search from './search.js';
import Sidebar from './sidebar.js';
import Gallery from './gallery.js';
import Directory from './directory.js';


// Import components
import './App.css';


function App(){
  return (
    <div>
      <h1>Craigslist</h1>
      <div className="App">
        <Search />
        <Sidebar />
        <Directory />
        <Gallery postings={postings}/>
      </div>
    </div>
  );
}

export default App;
