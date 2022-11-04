import logo from './logo.svg';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemlistContainer from './components/ItemListContainer/ItemLinstContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <NavBar/>
        <Routes> 
          <Route path='/' element={<ItemlistContainer/>} />
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>            
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
