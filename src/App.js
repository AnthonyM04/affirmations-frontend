import Listing from './scenes/Listing';
import Header from './scenes/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Listing />
      </header>
    </div>
  );
}

export default App;