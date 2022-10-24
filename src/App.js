import logo from './logo.svg';
import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemLinstContainer'

function App() {
  return (
    <div className="App">
    <header>
      <NavBar/>
    </header>
    <div className='container d-flex aling-center' >
      <ItemListContainer>Bienvenido a Phone Gang</ItemListContainer>
    </div>
    </div>

  );
}

export default App;
