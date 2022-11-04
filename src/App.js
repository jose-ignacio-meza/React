import logo from './logo.svg';
import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
    <header>
      <NavBar/>
    </header>
      <ItemDetailContainer/>
    </div>

  );
}

export default App;
