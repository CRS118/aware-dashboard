import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import FloodWarnings from './components/FloodWarnings';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FloodWarnings />
    </div>
  );
}

export default App;