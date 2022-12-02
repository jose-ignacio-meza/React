import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './storage/context'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemlistContainer from './components/ItemListContainer/ItemLinstContainer';
import CartView from './components/CartView/CartView';

import {cargaDeDatos} from './database/firebase'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter> 
          <NavBar/>
          <Routes> 
            <Route path='/' element={<ItemlistContainer/>} />
            <Route path='/cart' element={<CartView/>} />
            <Route path="/category/:category" element={<ItemlistContainer/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/> 
            <Route path="/checkout/:orderid" element={<h1>Gracias por tu compra</h1>}/>   
            <Route path="*" element={<h1>404: Ruta no encontrada</h1>} />        
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>

  );
}

export default App;
