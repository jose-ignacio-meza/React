import { useState } from "react";
import { createContext } from "react";

const cartContext = createContext();

export function CartContextProvider (props){
    const [carro, setCarro]=useState([])

    function agregarAlCarro(itemParaCarro){
        let itemBuscado = carro.find((itemActual)=> itemActual.id === itemParaCarro.id)
        console.log(itemBuscado)
        if (itemBuscado) {
            let nuevoCarro = carro.map((itemEnCarro)=>{
            if (itemEnCarro.ID === itemParaCarro.id){
                itemEnCarro.cant += itemParaCarro.cant
                return itemEnCarro
            }else{
                return itemEnCarro
            }
            });
            setCarro(nuevoCarro)
        }else {
            const nuevoCarro = [...carro]
            nuevoCarro.push(itemParaCarro)
            setCarro(nuevoCarro)
        }
     

    }

    function totalItemsEnCarro(){
        let total = 0 ;
        carro.forEach(itemEnCarro => {
            console.log(itemEnCarro)
            total = total + itemEnCarro.cant;
        });
        return total;
    }
    const value = {
        carro,
        agregarAlCarro,
        totalItemsEnCarro
      };
return (
    <cartContext.Provider value={value}> {props.children} </cartContext.Provider>
) 
}


export default cartContext; 