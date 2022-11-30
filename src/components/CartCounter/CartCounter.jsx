import { useState } from "react";
import "./cartCounter.css";

function CartCounter ({ stock, paraAgregarAlCarro}){
const [cant, setCant]= useState(1); 
console.log(cant)

return  <div className="counterStyle">
        <button onClick={(() =>setCant(cant + 1))} > + </button>
        <h4 className="cantidad"> {cant} </h4>
        <button onClick={() => {if(cant>1){setCant(cant-1)}} }> - </button>
        <button onClick={() => paraAgregarAlCarro(cant)}> Agregar al carrito </button>
        </div>
}

export default CartCounter;