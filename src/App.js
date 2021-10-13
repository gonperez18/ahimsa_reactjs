import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;
